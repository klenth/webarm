import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import RegisterDisplay from './components/RegisterDisplay';
import * as AST from './grammar/arm32Ast';
import { SimulatorState } from './arm32sim/SimulatorState.js';
import { RegisterBank } from './arm32sim/RegisterBank.js';
import './App.css';
import logo from './cs.w.twotone.transparent.png';
import NzcvDisplay from './components/NzcvDisplay';
import RamDisplay from './components/RamDisplay';
import OpenFileDialog from './components/OpenFileDialog';
import OptionsDialog from './components/OptionsDialog';
import EditorTab from './components/EditorTab';
//import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/ext-searchbox.js';
import AssemblyARM32Mode from './ace-editor/mode-arm32.js';
import 'ace-builds/src-noconflict/theme-textmate.js';
import 'ace-builds/src-noconflict/theme-github_dark.js';

const VERSION = '20240408.0';

const Top = styled.div`
  grid-area: top;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  padding: 8px;
  border-bottom: 2px solid var(--color-thistle);
`

const Controls = styled.div`
  position: relative;
  flex-grow: 0;
  text-align: right;
  padding-right: 80px;
  padding-left: 40px;
  
  & > * {
    margin: 2px 8px;
  }
`;

const Title = styled.div`
    flex-grow: 1.0;
    text-align: center;
    font-size: 1.2rem;
`;

const EditorTabs = styled.div`
    grid-area: editor;
    position: relative;
    padding-left: 12px;
`;

const Registers = styled.div`
  grid-area: registers;
  /*flex-grow: 0;*/
`;

const MessageDisplay = styled.div`
    grid-area: message;
    padding-left: 8px;
    height: 2rem;
    line-height: 2rem;
    margin: 4px;
    border-top: 2px solid var(--color-thistle);
`;

const SimulatorOutput = styled.pre`
    position: relative;
    margin: 4px;
    grid-area: output;
    border: 2px solid var(--color-thistle);
    min-height: 8em;
    overflow: scroll;
`;

const SimulatorOutputLabel = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    padding: 6px;
    isolation: isolate;
    z-index: 1;
    font-family: Lato, sans-serif;
  
    &::before {
        content: "";
        display: block;
        position: absolute;
        left: -12px;
        right: -24px;
        bottom: -4px;
        top: -4px;
        background-color: var(--color-for-chrome);
        transform: skewX(20deg);
        border-radius: 0 0 0 4px;
        z-index: -1;
    }
`;

const Nonprintable = styled.span`
    color: #bbb;
`;

const Logo = styled.img`
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto 0 !important;
    height: 24px;
    
    .dark-mode & {
        filter: brightness(120%);
    }
`;

const TABS_STORAGE_PROPERTY = 'webarm_tabs';
const OPTIONS_STORAGE_PROPERTY = 'webarm_options';
const DARK_MODE_STORAGE_PROPERTY = 'webarm_dark';
let firstLoad = true;
const customMode = new AssemblyARM32Mode();
const EASTER_EGG_VALUE = 0xA1CC_A011;

const DEFAULT_STARTING_REGISTERS = new RegisterBank();
DEFAULT_STARTING_REGISTERS.set(13, 0xFF00_0000);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                filename: 'code.webs',
                code: '',
                simulatorState: new SimulatorState(),
                previousSimulatorState: null,
                simulatorStateDiff: null,
                message: '',
                debugCurrentLine: null,
                state: '',
                symbolAddresses: null,
            }],
            livingTabNumbers: new Set([0]),
            selectedTab: 0,
            showingMemory: false,
            options: {
                stopOnZero: true,
                stopAfterInstructions: [true, 100],
                stopAfterTime: [true, 10],
                randomizeRegisters: false,
            },
            dark: false,
            easterEgg: -1,
        };
        this.editorRefs = {};
        this.openFileDialogRef = null;
        this.optionsDialogRef = null;
        this.seq = 0;
        this.seqs = {};
        this.tabNumber = 0;
        this.messageHandlers = {};

        if (firstLoad) {
            firstLoad = false;
            const localStorageTabs = this.parseLocalStorageTabs();
            this.state = { ...this.state, ...localStorageTabs };
            if ('localStorage' in window) {
                const storedOptions = window['localStorage'].getItem(OPTIONS_STORAGE_PROPERTY);
                if (storedOptions)
                    this.state.options = {
                        ...this.state.options,
                        ...JSON.parse(storedOptions)
                    };
                const storedDark = window['localStorage'].getItem(DARK_MODE_STORAGE_PROPERTY);
                if (storedDark !== undefined)
                    this.state.dark = JSON.parse(storedDark);
            }
        }
    }

    render() {
        const tab = this.currentTab;
        const stateRegisters = tab.simulatorState.registers || new RegisterBank();
        const simulatorOutputText = this.makeSimulatorOutputText(tab.simulatorState.stdout);
        const diff = tab.simulatorStateDiff;
        const symbolAddresses = tab.symbolAddresses;
        const registers = [...Array(16).fill(0)].map((_, i) => (
            <RegisterDisplay
                key={i}
                label={(i === 13) ? 'SP' : (i === 14) ? 'LR' : (i === 15) ? 'PC' : 'R' + i}
                value={stateRegisters.get(i)}
                updated={diff?.registers[i]}
            />
        ));

        const newFileButton = (
            <button
                onClick={() => this.handleNewFileButtonClicked()}
                key={'newFileButton'}
            >New file</button>
        );

        const openFileButton = (
            <button
                onClick={() => this.handleOpenFileButtonClicked()}
                key={'openFileButton'}
            >Open file...</button>
        );

        const saveFileButton = (
            <button
                onClick={() => this.handleSaveFileButtonClicked()}
                key={'saveFileButton'}
            >Save file...</button>
        );

        const memoryCheckbox = (
            <label>
                <input
                    type={'checkbox'}
                    onChange={e => this.updateState({ showingMemory: e.target.checked })}
                />
                Show memory
            </label>
        )
        const assembleButton = (
            <button
                onClick={() => this.handleAssemble()}
                key={'assembleButton'}
                title={'Assemble code (F6)'}
            >Assemble</button>
        );
        const runButton = (
            <button
                onClick={() => this.handleRun()}
                key={'runButton'}
                title={'Run program (F7)'}
            >Run</button>
        );
        const debugButton = (
            <button
                onClick={() => this.handleDebug(true)}
                key={'debugButton'}
                title={'Debug program (F8)'}
            >Debug</button>
        );
        const stepBackButton = (
            <button
                onClick={() => this.handleContinue('backward', true)}
                key={'stepBackButton'}
            >Step back</button>
        );
        const stepForwardButton = (
            <button
                onClick={() => this.handleContinue('forward', true)}
                key={'stepForwardButton'}
            >Step forward</button>
        );
        const continueButton = (
            <button
                onClick={() => this.handleContinue('forward', false)}
                key={'continueButton'}
                title={'Continue (F8)'}
            >Continue</button>
        );
        const stopButton = (
            <button
                onClick={() => this.handleStop()}
                key={'stopButton'}
            >Stop</button>
        );
        const optionsButton = (
            <button
                onClick={() => this.handleShowOptionsDialog()}
                key={'optionsButton'}
            >Options</button>
        );

        const buttons = (tab.state === '') ? [ newFileButton, openFileButton, saveFileButton, assembleButton, runButton, debugButton, optionsButton ]
            : (tab.state === 'running') ? [ stopButton ]
            : (tab.state === 'debugging/paused') ? [ newFileButton, openFileButton, saveFileButton, stepBackButton, stepForwardButton, continueButton, stopButton ]
            : (tab.state === 'debugging/running') ? [ stopButton ]
            : [];

        function tabMarkers(t) {
            const markers = [];
            if (t.debugCurrentLine !== null) {
                markers.push({
                    startRow: t.debugCurrentLine - 1,
                    endRow: t.debugCurrentLine,
                    type: 'line',
                    className: 'debug-current-line'
                });
            }
            return markers;
        }

        const readOnly = (tab.state !== '');

        const className = 'App' + (this.state.dark ? ' dark-mode' : '');

        return (
            <div className={className}
                 onKeyDown={e => this.handleKeyDown(e)}
            >
                <OpenFileDialog
                    ref={ref => this.openFileDialogRef = ref}
                    onOpen={(filename, code) => this.handleOpenFile(filename, code)}
                />
                <OptionsDialog
                    ref={ref => this.optionsDialogRef = ref}
                    initialOptions={this.state.options}
                    onAccept={newOptions => this.handleOptionsChange(newOptions)}
                />
                <Top>
                    <Controls>
                        <div
                            className={'dark-mode-toggle'}
                            title={'Toggle dark mode'}
                            onClick={_ => this.handleToggleDarkMode()}
                        />
                        <a href={"https://cs.westminsteru.edu/cmpt328/webarm/docs/"} target={"docs"}>Help</a>
                    </Controls>
                    <Title
                        title={`WebARM version ${VERSION}`}
                    >
                        WebARM
                    </Title>
                    <Controls>
                        {memoryCheckbox}
                        {buttons}
                        <Logo
                            src={logo}
                        />
                    </Controls>
                </Top>
                <EditorTabs>
                    {[ ...this.state.livingTabNumbers ].map(i => {
                        const t = this.state.tabs[i];
                        return (
                            <EditorTab
                                key={`tab_${i}`}
                                selected={i == this.state.selectedTab}
                                readOnly={t.state !== ''}
                                label={t.filename}
                                code={t.code}
                                theme={this.state.dark ? 'github_dark' : 'textmate'}
                                markers={tabMarkers(t)}
                                handleCodeChange={code => this.handleCodeChange(i, code)}
                                handleSetEditorRef={ref => this.setEditorRef(i, ref)}
                                handleTabSelected={() => this.selectTab(i)}
                                handleTabRenamed={name => this.updateTabState({ filename: name }, i)}
                                handleTabClosed={() => this.closeTab(i)}
                                easterEgg={this.state.easterEgg === i}
                            />
                        );
                    })}
                </EditorTabs>
                <Registers>
                    {registers}
                    <NzcvDisplay
                        N={tab.simulatorState.N}
                        Z={tab.simulatorState.Z}
                        C={tab.simulatorState.C}
                        V={tab.simulatorState.V}
                        updatedN={diff?.nzcv.N}
                        updatedZ={diff?.nzcv.Z}
                        updatedC={diff?.nzcv.C}
                        updatedV={diff?.nzcv.V}
                    />
                </Registers>
                {(this.state.showingMemory) ? (
                    <RamDisplay
                        memory={tab.simulatorState.memory}
                        highlightWord={tab.state === 'debugging/paused' ? tab.simulatorState.PC : null}
                        style={{gridArea: 'memory'}}
                        updatedAddresses={diff?.memory}
                        symbolAddresses={symbolAddresses}
                        registers={stateRegisters}
                    />
                ) : null}
                <MessageDisplay>{tab.message || ' '}</MessageDisplay>
                <SimulatorOutput>
                    {simulatorOutputText}
                    <SimulatorOutputLabel>
                        Simulator output
                    </SimulatorOutputLabel>
                </SimulatorOutput>
            </div>
        );
    }

    selectTab(tabIndex) {
        this.updateState({
            selectedTab: tabIndex,
        });
    }

    closeTab(tabIndex) {
        tabIndex = '' + tabIndex;

        const newTabs = { ...this.state.tabs, [tabIndex]: null };
        let newSelectedTab = this.state.selectedTab;
        const newLivingTabs = new Set(this.state.livingTabNumbers);
        newLivingTabs.delete(parseInt(tabIndex));

        if (simWorkers[tabIndex])
            simWorkers[tabIndex].terminate();
        delete simWorkers[tabIndex];
        delete this.seqs[tabIndex];
        delete this.messageHandlers[tabIndex];
        delete this.editorRefs[tabIndex];

        if (newSelectedTab == tabIndex) {
            // We're deleting the current tab; figure out which should now be selected
            newSelectedTab = null;

            // Try to select the next tab to the left
            for (let i = tabIndex - 1; i >= 0; --i) {
                if (newLivingTabs.has(i)) {
                    newSelectedTab = i;
                    break;
                }
            }

            if (newSelectedTab === null) {
                // No tabs to the left - try one to the right
                for (let i of newLivingTabs) {
                    if (i > tabIndex) {
                        newSelectedTab = i;
                        break;
                    }
                }
            }

            if (newSelectedTab === null) {
                // It seems there aren't any other tabs! Make a new, blank one
                const newTabNumber = ++this.tabNumber;
                newTabs[newTabNumber] = this.newTab({ filename: `code${newTabNumber}.webs` });
                newSelectedTab = newTabNumber;
                newLivingTabs.add(newTabNumber);
            }
        }

        const newState = { ...this.state };
        newState.tabs = newTabs;
        newState.selectedTab = newSelectedTab;
        newState.livingTabNumbers = newLivingTabs;
        this.setState(newState, () => this.updateLocalStorageTabs());
    }

    setEditorRef(i, ref) {
        this.editorRefs[i] = ref;
        if (ref)
            ref.editor.getSession().setMode(customMode);
    }

    newTab(properties) {
        return {
            filename: 'code.webs',
            code: '',
            simulatorState: new SimulatorState(),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            message: '',
            debugCurrentLine: null,
            state: '',
            symbolAddresses: null,

            ...properties
        };
    }

    componentDidMount() {
    }

    updateState(changedProperties) {
        const newState = { ...this.state, ...changedProperties };
        this.setState(newState);
    }

    updateTabState(changedProperties, tabIndex=null) {
        if (tabIndex === null)
            tabIndex = this.state.selectedTab;
        const newTab = { ...this.currentTab, ...changedProperties };
        const newTabs = { ...this.state.tabs };
        newTabs[tabIndex] = newTab;
        this.updateState({ tabs: newTabs });
    }
    
    get currentTab() {
        return this.state.tabs[this.state.selectedTab];
    }

    getWorker() {
        const selectedTab = this.state.selectedTab;
        if (!simWorkers[selectedTab]) {
            const simWorker = new Worker(new URL('./simWorker.js', import.meta.url));
            simWorker.addEventListener('message', e => {
                if (e.data.seq === this.seqs[selectedTab] && this.messageHandlers[selectedTab])
                    this.messageHandlers[selectedTab](e.data.message);
                else
                    console.info(`Received stale message from worker (seq=${e.data.seq}, expected seq=${this.seqs[selectedTab]}:`, e.data.message);
            });
            simWorkers[selectedTab] = simWorker;
        }

        return simWorkers[selectedTab];
    }

    stopWorker() {
        const selectedTab = this.state.selectedTab;
        if (simWorkers[selectedTab])
            simWorkers[selectedTab].terminate();

        this.seqs[selectedTab] = this.messageHandlers[selectedTab] = simWorkers[selectedTab] = null;
    }

    handleToggleDarkMode() {
        const newDarkMode = !this.state.dark;
        if ('localStorage' in window)
            window['localStorage'].setItem(DARK_MODE_STORAGE_PROPERTY, JSON.stringify(newDarkMode));
        this.updateState({
            dark: newDarkMode,
        });
    }

    handleKeyDown(e) {
        if (e.code === 'F6') {
            e.preventDefault();
            if (this.currentTab.state === '')
                this.handleAssemble();
        } else if (e.code === 'F7') {
            e.preventDefault();
            if (this.currentTab.state === '')
                this.handleRun();
        } else if (e.code === 'F8') {
            e.preventDefault();
            if (this.currentTab.state === '')
                this.handleDebug();
            else if (this.currentTab.state === 'debugging/paused')
                this.handleContinue('forward', false);
        }
    }

    handleNewFileButtonClicked() {
        const newTabNumber = ++this.tabNumber;
        const newTab = this.newTab({ filename: `code${newTabNumber}.webs`, code: '' });

        const newTabs = { ...this.state.tabs };
        const newLivingTabs = new Set(this.state.livingTabNumbers);

        newTabs[newTabNumber] = newTab;
        newLivingTabs.add(newTabNumber);

        this.updateState({
            tabs: newTabs,
            selectedTab: newTabNumber,
            livingTabNumbers: newLivingTabs,
        });

        this.updateLocalStorageTabs();
    }

    handleOpenFileButtonClicked() {
        if (this.openFileDialogRef)
            this.openFileDialogRef.dialogRef.showModal();
    }

    handleOpenFile(files) {
        if (!files)
            return;

        const newTabs = { ...this.state.tabs };
        const newLivingTabs = new Set(this.state.livingTabNumbers);
        let newSelectedTab = null;
        for (const file of files) {
            const newTabNumber = ++this.tabNumber;
            const newTab = this.newTab({ filename: file.filename, code: file.code });

            newTabs[newTabNumber] = newTab;
            newLivingTabs.add(newTabNumber);

            if (newSelectedTab === null)
                newSelectedTab = newTabNumber;
        }

        this.updateState({
             tabs: newTabs,
             selectedTab: newSelectedTab,
             livingTabNumbers: newLivingTabs,
        });

        this.updateLocalStorageTabs();
    }

    handleSaveFileButtonClicked() {
        const data = new Blob([this.currentTab.code + '\n'], { type: 'text/plain' });
        const a = document.createElement('a');
        const url = URL.createObjectURL(data);
        a.href = url;
        a.download = this.currentTab.filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }

    handleCodeChange(i, s) {
        this.updateLocalStorageTabs(i, s);
        this.updateTabState({ code: s }, i);
    }

    updateLocalStorageTabs(i, s) {
        if ('localStorage' in window) {
            let index = 0;
            const storageTabs = {};
            for (let tabIndex of this.state.livingTabNumbers) {
                storageTabs[`tab${index}-code`] = (i !== undefined && tabIndex == i) ? s : this.state.tabs[tabIndex].code;
                storageTabs[`tab${index}-name`] = this.state.tabs[tabIndex].filename;
                if (tabIndex === this.state.selectedTab)
                    storageTabs['selected-tab'] = index;
                ++index;
            }
            storageTabs.count = index;
            const text = JSON.stringify(storageTabs);
            window['localStorage'].setItem(TABS_STORAGE_PROPERTY, text);
        }
    }

    parseLocalStorageTabs() {
        if ('localStorage' in window) {
            const text = window['localStorage'].getItem(TABS_STORAGE_PROPERTY);
            try {
                const storageTabs = JSON.parse(text);
                const tabs = [];
                const tabCount = +storageTabs.count;
                const livingTabNumbers = new Set();
                for (let i = 0; i < tabCount; ++i) {
                    const tabCode = storageTabs[`tab${i}-code`] || '';
                    const tabFilename = storageTabs[`tab${i}-name`] || `code${i}.webs`;
                    const tab = this.newTab({ code: tabCode, filename: tabFilename });
                    tabs.push(tab);
                    livingTabNumbers.add(i);
                }
                this.tabNumber = tabCount;

                return {
                    tabs: tabs,
                    selectedTab: +storageTabs['selected-tab'] || 0,
                    livingTabNumbers: livingTabNumbers,
                };
            } catch (e) {
                console.warn(`Error parsing local storage tabs:`, e);
            }
        }

        return {};
    }

    handleOptionsChange(options) {
        if ('localStorage' in window)
            window['localStorage'].setItem(OPTIONS_STORAGE_PROPERTY, JSON.stringify(options));
        this.updateState({
            options: options,
        });
    }

    handleShowOptionsDialog() {
        if (this.optionsDialogRef)
            this.optionsDialogRef.dialogRef.showModal();
    }

    handleAssemble() {
        this.clearMessages();
        this.seqs[this.state.selectedTab] = ++this.seq;

        this.messageHandlers[this.state.selectedTab] = msg => {
             if (msg.result === 'success') {
                 this.printMessage('Looks good!');
                 if (msg.state)
                     this.updateTabState({
                         simulatorState: SimulatorState.reconstruct(msg.state),
                         previousSimulatorState: null,
                         simulatorStateDiff: null,
                         symbolAddresses: msg.symbols,
                     });
             } else
                 this.printMessage(`Line ${msg.error.line}: ${msg.error.text}`);
        };

        this.getWorker().postMessage({
            seq: this.seqs[this.state.selectedTab],
            command: 'assemble',
            params: {
                code: this.currentTab.code,
            }
        });
    }

    workerOptions() {
        return {
            stopOnZero: this.state.options.stopOnZero,
            ...(this.state.options.stopAfterInstructions[0] ? { stopAfterInstructions: this.state.options.stopAfterInstructions[1] * 1000 } : {}),
            ...(this.state.options.stopAfterTime[0] ? { stopAfterTime: this.state.options.stopAfterTime[1] * 1000 } : {}),
        };
    }

    handleRun() {
        const randomizeRegisters = !!this.state.options.randomizeRegisters;
        const initialRegisters = randomizeRegisters ? this.randomRegisters() : DEFAULT_STARTING_REGISTERS;

        this.updateTabState({
            state: 'running',
            message: '',
            simulatorState: new SimulatorState(initialRegisters),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            debugCurrentLine: null,
        });
        this.seqs[this.state.selectedTab] = ++this.seq;

        /*
        workerTimeout = window.setTimeout(() => {
            this.stopWorker();
            this.updateState({
                message: "Execution halted (appeared to be stuck in a loop)",
                state: '',
            });
        }, 5000);
        */

        this.messageHandlers[this.state.selectedTab] = msg => {
            const tab = this.currentTab;
            //window.clearTimeout(workerTimeout);
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.broken) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: 'debugging/paused',
                    symbolAddresses: msg.symbols,
                });
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions in ${msg.executionTime / 1000}s`);
                this.checkEasterEgg(state);
            } else if (state.exceededLimits) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                console.error(`Unexpected simulator state after run: ${state.state}`);
        };

        this.getWorker().postMessage({
            seq: this.seqs[this.state.selectedTab],
            command: 'run',
            params: {
                code: this.currentTab.code,
                options: {
                    stopAfterEveryInstruction: false,
                    stopOnBreak: false,
                    stopOnInterrupt: true,
                    randomizeRegisters: true,
                    initialRegisterValues: initialRegisters.values,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleDebug(breakEveryInstruction) {
        const randomizeRegisters = !!this.state.options.randomizeRegisters;
        const initialRegisters = randomizeRegisters ? this.randomRegisters() : DEFAULT_STARTING_REGISTERS;

        this.updateTabState({
            state: 'debugging/running',
            message: '',
            simulatorState: new SimulatorState(initialRegisters),
            previousSimulatorState: null,
            simulatorStateDiff: null,
            debugCurrentLine: null,
        });

        this.seqs[this.state.selectedTab] = ++this.seq;

        this.messageHandlers[this.state.selectedTab] = msg => {
            const tab = this.currentTab;
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
                this.checkEasterEgg(state);
            } else if (state.exceededLimits) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState, false),
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });

            if (this.currentTab.debugCurrentLine)
                this.editorRefs[this.state.selectedTab].editor.scrollToLine(this.currentTab.debugCurrentLine - 1, true, true, () => {});
        };

        this.getWorker().postMessage({
            seq: this.seqs[this.state.selectedTab],
            command: 'run',
            params: {
                code: this.currentTab.code,
                options: {
                    stopImmediately: breakEveryInstruction,
                    stopAfterEveryInstruction: breakEveryInstruction,
                    stopOnBreak: true,
                    stopOnInterrupt: true,
                    initialRegisterValues: initialRegisters.values,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleContinue(direction, stopEveryInstruction) {
        this.seqs[this.state.selectedTab] = ++this.seq;

        this.updateTabState({
            state: 'debugging/running',
            message: '',
            debugCurrentLine: null,
        });

        this.messageHandlers[this.state.selectedTab] = msg => {
            const tab = this.currentTab;
            const state = msg.state !== null ? SimulatorState.reconstruct(msg.state) : new SimulatorState();
            if (msg.result === 'error') {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                });
                this.printErrorMessage(msg.error.line, `Error in execution: ${msg.error.text}`);
            } else if (state.interrupted)
                this.handleSoftwareInterrupt(msg.state);
            else if (state.stopped) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: null,
                    symbolAddresses: msg.symbols,
                });
                this.printMessage(`Program ended after executing ${state.numSteps} instructions.`);
                this.checkEasterEgg(state);
            } else if (state.exceededLimits) {
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: '',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols
                });
                this.printMessage(`Execution halted after ${state.numSteps} instructions in ${msg.executionTime / 1000}s due to exceeding limits.`);
            } else
                this.updateTabState({
                    simulatorState: state,
                    previousSimulatorState: tab.simulatorState,
                    simulatorStateDiff: state.diff(tab.simulatorState),
                    state: 'debugging/paused',
                    debugCurrentLine: msg.line,
                    symbolAddresses: msg.symbols,
                    message: `Paused (${state.numSteps} instructions executed)`,
                });

            if (this.currentTab.debugCurrentLine)
                this.editorRefs[this.state.selectedTab].editor.scrollToLine(this.currentTab.debugCurrentLine - 1, true, true, () => {});
        };

        this.getWorker().postMessage({
            seq: this.seqs[this.state.selectedTab],
            command: 'run',
            params: {
                code: null,
                options: {
                    resume: true,
                    stopAfterEveryInstruction: stopEveryInstruction,
                    stopOnBreak: true,
                    stopOnInterrupt: true,
                    direction: direction,
                    resetWrittenAddressRecord: true,
                    ...this.workerOptions(),
                },
            },
        });
    }

    handleStop() {
        this.stopWorker();
        this.updateTabState({
            message: "Execution halted (stop button pushed)",
            state: '',
            debugCurrentLine: null,
        });
    }

    handleSoftwareInterrupt(simulatorState) {
        console.warn('handleSoftwareInterrupt() needs to be redone!');

    }

    clearMessages() {
        this.updateTabState({
            message: ''
        });
    }

    printMessage(text) {
        this.updateTabState({
            message: this.currentTab.message + text
        });
    }

    printErrorMessage(line, text) {
        if (line)
            this.printMessage(`Line ${line}: ${text}`);
        else
            this.printMessage(text);
    }

    makeSimulatorOutputText(stdout) {
        function printableChar(b) {
            if (b === 0x09 || b === 0x0A || b >= 0x20 && b <= 0x7e)
                return String.fromCharCode(b);
            else
                return null;
        }

        function appendRange(text, printable) {
            if (text.length === 0)
                return;
            else if (printable)
                ranges.push(text);
            else
                ranges.push((
                    <Nonprintable key={key++}>{text}</Nonprintable>
                ));
        }

        let text = '';
        let printable = true;
        let ranges = [];
        let key = 0;
        for (let byte of stdout.bytes) {
            const c = printableChar(byte);
            if (!!c === printable)
                text += c || '•';
            else {
                appendRange(text, printable);
                text = c || '•';
                printable = !!c;
            }
        }

        appendRange(text, printable);

        return ranges;
    }

    randomRegisters() {
        const registers = new RegisterBank();
        for (let i = 0; i <= 12; ++i)
            registers.set(i, Math.floor(0x1_0000_0000 * Math.random()));
        registers.set(13, ((0xff00_0000 + Math.floor(0xf0_0000 * Math.random())) >>> 8) << 8);
        return registers;
    }

    checkEasterEgg(state) {
        if (state.registers.get(7) === EASTER_EGG_VALUE)
            this.updateState({
                easterEgg: this.state.selectedTab,
            });
    }
}

let simWorkers = {};

export default App;
