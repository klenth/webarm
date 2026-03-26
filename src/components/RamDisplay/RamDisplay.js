import styled from 'styled-components';
import React from 'react';
import SimulatorMemory from '../../arm32sim/SimulatorMemory';
import { WordTooltip } from './WordTooltip.js';
import * as format from '../../format.js';

const Pane = styled.div`
    margin: 4px;
    border: 2px solid var(--color-thistle);
    border-radius: 8px;
    position: relative;
    padding-top: 1.5em;
    height: fit-content;
    --color-for-updated: var(--color-copper);
`;

const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5em;
    background-color: var(--color-thistle);
    color: white;
    padding: 2px 8px;
`;

const Controls = styled.div`
    padding: 8px;
  
    & input {
      font-family: monospace;
    }
  
    #symbolBox {
        width: 8em;
    }
    
    & > * > * {
        margin: 4px;
    }
`;

const AddressInput = styled.input`
    width: 8em;
    color: var(--color-for-text);
    background-color: var(--color-for-background);
    border-color: var(--color-thistle);
`;

const Field = styled.div`
    padding: 4px;
    font-family: monospace;
    cursor: default;
    position: relative;
`;

const LineDisplay = styled.div`
    &:hover {
      background-color: var(--color-for-current-highlight);
    }
  
    &:nth-child(4n+4) {
        margin-bottom: 4px;
    }
`;

const AddressDisplay = styled.span`
    padding-right: 8px;
    color: var(--color-thistle);
`;

const WordDisplay = styled.span`
    margin-left: 1.5ex;
    border-radius: 4px;
  
    &.highlighted {
        background-color: var(--color-for-current-highlight);
    }
  
    &.updated.highlighted, &.updated {
        background-color: #9D581F70;
    }
  
    &:hover {
        outline: 3px solid var(--color-for-current-highlight);
    }
`;

const ByteDisplay = styled.span`
    position: relative;
    margin: 0 0.5ex;
    pointer-events: none;
  
    &.selected::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -6px;
        top: -3px;
        width: 1ex;
        bottom: -3px;
        border: 4px solid var(--color-thistle);
        border-radius: 4px 0 0 4px;
        border-right-width: 0;
    }
`;

const ScrollButton = styled.button`
    padding: 0 12px;
`;

function formatByte(value) {
    const s = value.toString(16).toUpperCase();
    return (s.length === 1) ? '0' + s : s;
}

function formatAddress(addr) {
    const s = (addr >>> 0).toString(16).toUpperCase();
    return '\u00a0'.repeat(Math.max(0, 8 - s.length)) + s;
}

export default class RamDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            offsetText: '0',
            hoverAddress: null,
            hoverPoint: {},
            selectedAddress: null,
            selectedRegister: '',
            selectedSymbol: '',
        };
        this.numLines = 24;
        this.wordsPerLine = 4;
    }

    render() {
        const numLines = this.numLines;
        const wordsPerLine = this.wordsPerLine;
        const mem = this.props.memory || new SimulatorMemory();
        const offset = this.state.offset >>> 0;
        const lines = [...Array(numLines).fill(0)].map((_, i) => (
            <Line
                lineNumber={i}
                memory={mem}
                numWords={wordsPerLine}
                offset={offset + wordsPerLine * 4 * i}
                key={`line_${i}`}
                highlightWord={this.props.highlightWord}
                updatedAddresses={this.props.updatedAddresses}
                selectedAddress={this.state.selectedAddress}
                handleWordPointerEnter={(address, x, y) => this.handleWordPointerEnter(address, x, y)}
                handleWordPointerExit={address => this.handleWordPointerExit(address)}
            />
        ));

        const symbolOptions = Object.keys(this.props.symbolAddresses || {}).map(sym => (
            <option
                key={sym}
                value={sym}
            >{sym} (0x{this.props.symbolAddresses[sym].toString(16).toUpperCase()})</option>
        ))

        const registerName = i =>
            (i === 13) ? 'SP'
            : (i === 14) ? 'LR'
            : (i === 15) ? 'PC'
            : `R${i}`
        ;
        const registerOptions = new Array(16).fill(0).map((_, i) => (
            <option
                key={`R${i}`}
                value={i}
            >{registerName(i)} (0x{this.props.registers.get(i).toString(16).toUpperCase()})</option>
        ));

        return (
            <Pane>
                <Title>
                    Memory contents
                </Title>
                <Controls>
                    <label>
                        Starting address: &nbsp;
                        <span style={{fontFamily: 'monospace'}}>0x</span>
                        <AddressInput
                            type={'text'}
                            onChange={e => this.handleOffsetChange(e)}
                            onKeyDown={e => this.handleOffsetKeyDown(e)}
                            value={this.state.offsetText}
                        />
                        <ScrollButton
                            onClick={() => this.handleScrollDown()}
                        >🠫</ScrollButton>
                        <ScrollButton
                            onClick={() => this.handleScrollUp()}
                        >🠩</ScrollButton>
                    </label>
                    <div>
                        Jump to

                        <select
                            id={'registerBox'}
                            value={this.state.selectedRegister}
                            onChange={e => {
                                if (e.target.value === '')
                                    this.setState(state => ({ ...state, selectedAddress: null, }));
                                else
                                    this.handleScrollTo(this.props.registers.get(e.target.value));
                                this.setState(state => ({
                                    ...state,
                                    selectedRegister: e.target.value,
                                    selectedSymbol: '',
                                }));
                            }}
                        >
                            <option value={""}>Register value</option>
                            {registerOptions}
                        </select>

                        <select
                            id={'symbolBox'}
                            value={this.state.selectedSymbol}
                            onChange={e => {
                                if (e.target.value === '')
                                    this.setState(state => ({ ...state, selectedAddress: null, }));
                                else
                                    this.handleScrollTo(this.props.symbolAddresses[e.target.value]);
                                this.setState(state => ({
                                    ...state,
                                    selectedSymbol: e.target.value,
                                    selectedRegister: '',
                                }));
                            }}
                            disabled={symbolOptions.length === 0}
                        >
                            <option
                                value={""}
                            >Symbol</option>
                            {symbolOptions}
                        </select>
                    </div>
                </Controls>
                <Field>
                    {lines}
                    <WordTooltip
                        x={this.state.hoverPoint.x || 0}
                        y={this.state.hoverPoint.y || 0}
                        visible={this.state.hoverAddress !== null}
                        address={this.state.hoverAddress}
                        word={this.state.hoverAddress !== null ? mem.readWord(this.state.hoverAddress) : 0}
                    />
                </Field>
            </Pane>
        );
    }

    handleOffsetKeyDown(e) {
        if (e.key === 'Enter') {
            const newAddr = parseInt(e.target.value.replaceAll(/\s+/g, ''), 16);
            if (!isNaN(newAddr))
                this.setState({
                    ...this.state,
                    offset: (newAddr & 0xffff_fff0) >>> 0,
                    selectedAddress: (newAddr & 0xffff_ffff) >>> 0,
                });
        }
    }

    handleOffsetChange(e) {
        this.setState({
            ...this.state,
            offsetText: e.target.value
        });
    }

    handleScrollDown() {
        const newOffset = (Math.min(this.state.offset + 0x100, 0xffff_feff) & 0xffff_fff0) >>> 0;
        this.setState({
            ...this.state,
            offset: newOffset,
            offsetText: newOffset.toString(16).toUpperCase()
        });
    }

    handleScrollUp() {
        const newOffset = (Math.max(this.state.offset - 0x100, 0) & 0xffff_ffff0) >>> 0;
        this.setState({
            ...this.state,
            offset: newOffset,
            offsetText: newOffset.toString(16).toUpperCase()
        });
    }

    handleScrollTo(addr) {
        const newState = {
            ...this.state,
            selectedAddress: addr,
        };

        const minAddr = this.state.offset, maxAddr = this.state.offset + this.numLines * this.wordsPerLine * 4;
        if (addr < minAddr || maxAddr <= addr) {
            const newOffset = (Math.max(addr - 0x100, 0) & 0xffff_fff0) >>> 0;
            newState.offset = newOffset;
            newState.offsetText = newOffset.toString(16).toUpperCase();
        }

        this.setState(newState);
    }

    handleWordPointerEnter(address, x, y) {
        this.updateState({
            hoverAddress: parseInt(address),
            hoverPoint: { x: x, y: y }
        });
    }

    handleWordPointerExit(address) {
        if (this.state.hoverAddress === address)
            this.updateState({
                hoverAddress: null
            });
    }

    updateState(stateUpdates) {
        this.setState({
            ...this.state,
            ...stateUpdates
        });
    }
}

class Line extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const numWords = this.props.numWords || 4;
        const lineNumber = this.props.lineNumber || 0;
        const mem = this.props.memory || new SimulatorMemory();
        const offset = this.props.offset || 0;

        if (offset > 0xffff_ffff)
            return <></>;

        const wordDisplays = [...Array(numWords).fill(0)].map((_, i) => {
            const addr = offset + 4 * i;
            let className = '';
            if (this.props.highlightWord === addr)
                className += 'highlighted ';
            if (this.props.updatedAddresses && this.props.updatedAddresses.has(addr))
                className += 'updated ';
            return (
                <WordDisplay
                    key={`line_${lineNumber}_word_${i}`}
                    className={className}
                    //title={formatWordTitle(offset + 4 * i, mem.readWord(offset + 4 * i))}
                    data-address={offset + 4 * i}
                    onPointerEnter={e => {
                        let x = e.target.offsetLeft, y = e.target.offsetTop;
                        x -= (i / (numWords - 1)) * e.target.offsetWidth;
                        y += 3 * e.target.offsetHeight;
                        this.props.handleWordPointerEnter(offset + 4 * i, x, y);
                    }}
                    onPointerLeave={_ => this.props.handleWordPointerExit(offset + 4 * i)}
                >{[...Array(4).fill(0)].map((_, b) => (
                    <ByteDisplay
                        key={`line_${lineNumber}_word_${i}_${b}`}
                        className={(this.props.selectedAddress === offset + 4 * i + b) ? 'selected' : ''}
                    >{formatByte(mem.readByte(offset + 4 * i + b))}</ByteDisplay>
                ))}</WordDisplay>
            )
        });

        return (
            <LineDisplay>
                <AddressDisplay
                    key={`line_${lineNumber}_address`}
                >{formatAddress(offset)}</AddressDisplay>
                {wordDisplays}
            </LineDisplay>
        );
    }
}
