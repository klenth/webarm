import styled from 'styled-components';
import React from 'react';

const Dialog = styled.dialog`
    position: relative;
  
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.2);
        filter: blur(5px);
    }
  
    & input[type=file] {
        display: none;
    }
`;

const Title = styled.h1`
`;

const Label = styled.label`
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
                <Label
                    className={'button'}
                >
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
