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
            selectedFiles: [],
        };
    }

    render() {
        const selectedFilenames = [ ...this.state.selectedFiles ].map(f => f.name).join(', ');
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
                        multiple={true}
                        accept={'.webs'}
                        onChange={e => this.handleFileInput(e)}
                        ref={ref => this.fileInputRef = ref}
                    />
                </Label>
                <Filename>
                    {selectedFilenames}
                </Filename>
                <Controls>
                    <button
                        onClick={() => this.handleCancel()}
                    >Cancel</button>
                    <button
                        onClick={() => this.handleOk()}
                        disabled={!this.state.selectedFiles}
                    >OK</button>
                </Controls>
            </Dialog>
        );
    }

    handleFileInput(e) {
        this.setState({ selectedFiles: e.target.files });
    }

    handleCancel() {
        this.closeDialog();
    }

    closeDialog() {
        this.setState({ selectedFiles: [] });
        this.fileInputRef.files = null;
        this.dialogRef.close();
    }

    async handleOk() {
        if (this.props.onOpen && this.state.selectedFiles) {
            const files = [];
            for (const file of this.state.selectedFiles) {
                const code = await file.text();
                const filename = await file.name;
                files.push({ filename: filename, code: code });
            }
            this.props.onOpen(files);
        }

        this.closeDialog();
    }
}
