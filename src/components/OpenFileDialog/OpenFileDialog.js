import styled from 'styled-components';
import React from 'react';

const Dialog = styled.dialog`
    position: relative;
    padding: 16px;
    border: 2px solid var(--color-night);
    min-width: 50vw;
    min-height: 30vh;
  
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.2);
    }
  
    & input[type=file] {
        display: none;
    }
`;

const Title = styled.div`
    font-size: 1.2rem;
    margin: 8px;
    margin-bottom: 24px;
`;

const Label = styled.label`
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    color: white;
    background-color: var(--color-sky);
  
    &:hover {
      background-color: #33D6FF;
    }
`;

const Filename = styled.div`
    margin: 16px;
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

export default class OpenFileDialog extends React.Component {

    constructor(props) {
        super(props);
        this.dialogRef = this.fileInputRef = null;
        this.state = {
            selectedFile: null,
            selectedFileName: null,
        };
    }

    render() {
        const selectedFile = this.state.selectedFile;
        return (
            <Dialog
                ref={ref => this.dialogRef = ref}
            >
                <Title>
                    Open file
                </Title>
                <Label>
                    Choose an assembly file (.webs) to load
                    <input
                        type={'file'}
                        accept={'.webs'}
                        onChange={e => this.handleFileInput(e)}
                        ref={ref => this.fileInputRef = ref}
                    />
                </Label>
                <Filename>
                    {this.state.selectedFile?.name || ''}
                </Filename>
                <Controls>
                    <button
                        onClick={() => this.handleCancel()}
                    >Cancel</button>
                    <button
                        onClick={() => this.handleOk()}
                        disabled={selectedFile === null}
                    >OK</button>
                </Controls>
            </Dialog>
        );
    }

    handleFileInput(e) {
        const [file] = e.target.files;
        this.setState({ selectedFile: file });
    }

    handleCancel() {
        this.closeDialog();
    }

    closeDialog() {
        this.setState({ selectedFile: null });
        this.fileInputRef.files = null;
        this.dialogRef.close();
    }

    async handleOk() {
        if (this.props.onOpen && this.state.selectedFile) {
            const code = await this.state.selectedFile.text();
            this.props.onOpen(code);
        }

        this.closeDialog();
    }
}
