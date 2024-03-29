import styled from 'styled-components';
import React from 'react';
import AceEditor from 'react-ace';

const TabLabel = styled.div`
    cursor: default;
    user-select: none;
    
    display: inline-block;
    background-color: var(--color-night);
    padding: 4px 8px;
    border-radius: 4px 4px 0 0;
    color: white;
    margin: 2px 8px;
  
    &.selected {
      background-color: var(--color-thistle);
    }
`;

const Editor = styled(AceEditor)`
  /*grid-area: editor;*/
  /*flex-grow: 1;*/
  /*height: 100%;*/
  font-family: var(--mono-font);
  font-stretch: expanded;
  display: none;
  position: absolute;
  top: 32px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid var(--color-thistle);
  
  .debug-current-line {
    background-color: var(--color-for-current-highlight);
    position: absolute;
  }
  
  &.visible {
    display: block;
  }
`;

export default class EditorTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const editorClassName = [
            ...(this.props.selected ? ['visible'] : []),
            ...(this.props.readOnly ? ['read-only'] : []),
        ].join(' ');

        return (
            <>
                <TabLabel
                    className={this.props.selected ? 'selected' : ''}
                    onClick={_ => this.props.handleTabSelected()}
                >
                    {this.props.label}
                </TabLabel>
                <Editor
                    className={editorClassName}
                    ref={ref => this.props.handleSetEditorRef(ref)}
                    value={this.props.code}
                    theme={this.props.theme}
                    fontSize={18}
                    onChange={(s) => this.props.handleCodeChange(s)}
                    mode={'text'}
                    markers={this.props.markers}
                    readOnly={this.props.readOnly}
                    tabSize={8}
                    width={'initial'}
                    height={'initial'}
                    wrapEnabled={false}
                    showPrintMargin={false}
                    setOptions={{
                        highlightActiveLine: !this.props.readOnly,
                        highlightGutterLine: !this.props.readOnly,
                        fixedWidthGutter: true,
                        animatedScroll: true,
                    }}
                >{this.props.code}</Editor>
            </>
        );
    }
}