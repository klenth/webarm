import styled from 'styled-components';
import React from 'react';

const Dialog = styled.dialog`
    position: relative;
    
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.2);
    }
  
    & input[type=file] {
        display: none;
    }

    & input[type=number] {
      background-color: var(--color-for-background);
      color: var(--color-for-text);
      border-color: var(--color-for-chrome);
    }
`;

const Title = styled.h1`
`;

const ControlsTable = styled.table`
    & tr > * {
        padding: 8px 0;
    }
  
    input[type=number] {
      width: 5em;
  }
`;

const Controls = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: right;
    padding: 8px;
  
    & > * {
      margin: 8px;
    }
`;

export default class OptionsDialog extends React.Component {

    static _defaultOptions = {
        stopOnZero: true,
        stopAfterInstructions: [true, 100],
        stopAfterTime: [true, 5],
    };

    constructor(props) {
        super(props);
        this.dialogRef = null;
        this.state = {
            options: {
                ...OptionsDialog._defaultOptions,
                ...this.props.initialOptions,
            },
        };
    }

    render() {
        return (
            <Dialog
                ref={ref => this.dialogRef = ref}
            >
                <Title>
                    Options
                </Title>
                <ControlsTable>
                    <tbody>
                    <tr>
                        <td><input
                            type={'checkbox'}
                            id={'stop-on-zero-box'}
                            checked={this.state.options.stopOnZero}
                            onChange={e => this.handleStopOnZeroChanged(e.target.checked)}
                        /></td>
                        <td><label htmlFor={'stop-on-zero-box'}>Treat zero instruction as <code>STOP</code></label></td>
                    </tr>
                    <tr>
                        <td><input
                            type={'checkbox'}
                            id={'stop-after-instructions-box'}
                            checked={this.state.options.stopAfterInstructions[0]}
                            onChange={e => this.handleStopAfterInstructionsChanged(e.target.checked)}
                        /></td>
                        <td><label htmlFor={'stop-after-instructions-box'}>Stop after executing</label>
                            <label>
                                &nbsp;
                                <input
                                    type={'number'}
                                    id={'stop-after-instructions-number-box'}
                                    value={this.state.options.stopAfterInstructions[1]}
                                    disabled={!this.state.options.stopAfterInstructions[0]}
                                    min={1}
                                    onChange={e => this.handleStopAfterInstructionsNumberChanged(e.target.value)}
                                />
                                &nbsp;
                                thousand instructions
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><input
                            type={'checkbox'}
                            id={'stop-after-time-box'}
                            checked={this.state.options.stopAfterTime[0]}
                            onChange={e => this.handleStopAfterTimeChanged(e.target.checked)}
                        /></td>
                        <td><label htmlFor={'stop-after-time-box'}>Stop after</label>
                            &nbsp;
                            <label>
                                <input
                                    type={'number'}
                                    id={'stop-after-time-number-box'}
                                    value={this.state.options.stopAfterTime[1]}
                                    disabled={!this.state.options.stopAfterTime[0]}
                                    min={1}
                                    onChange={e => this.handleStopAfterTimeNumberChanged(e.target.value)}
                                />
                                &nbsp;
                                seconds
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </ControlsTable>

                <Controls>
                    <button
                        onClick={() => this.handleCancel()}
                    >Cancel</button>
                    <button
                        onClick={() => this.handleOk()}
                    >OK</button>
                </Controls>
            </Dialog>
        );
    }

    handleStopOnZeroChanged(flag) {
        this.setState({
            ...this.state,
            options: {
                ...this.state.options,
                stopOnZero: flag,
            },
        });
    }

    handleStopAfterInstructionsChanged(flag) {
        this.setState({
            ...this.state,
            options: {
                ...this.state.options,
                stopAfterInstructions: [flag, this.state.options.stopAfterInstructions[1]],
            },
        });
    }

    handleStopAfterInstructionsNumberChanged(value) {
        this.setState({
            ...this.state,
            options: {
                ...this.state.options,
                stopAfterInstructions: [this.state.options.stopAfterInstructions[0], +value],
            },
        });
    }

    handleStopAfterTimeChanged(flag) {
        this.setState({
            ...this.state,
            options: {
                ...this.state.options,
                stopAfterTime: [flag, this.state.options.stopAfterTime[1]],
            },
        });
    }

    handleStopAfterTimeNumberChanged(value) {
        this.setState({
            ...this.state,
            options: {
                ...this.state.options,
                stopAfterTime: [this.state.options.stopAfterTime[0], +value],
            },
        });
    }

    handleCancel() {
        this.closeDialog();
        this.setState({
            ...this.state,
            options: {
                ...OptionsDialog._defaultOptions,
                ...this.props.initialOptions
            },
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    handleOk() {
        this.closeDialog();
        if (this.props.onAccept)
            this.props.onAccept(this.state.options);
    }
}
