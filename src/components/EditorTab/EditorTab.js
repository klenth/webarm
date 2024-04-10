import styled from 'styled-components';
import React from 'react';
import AceEditor from 'react-ace';

const Tab = styled.div`
    position: relative;
    display: inline-block;
  background-color: var(--color-thistle);
  filter: brightness(80%);
  padding: 4px 12px;
  border-radius: 4px 4px 0 0;
  width: fit-content;
  color: white;
  margin: 2px 4px;
  top: 3px;
  height: 24px;
  line-height: 24px;
  z-index: 0;
  transition-property: top, filter;
  transition-duration: 0.1s;
  font-family: Iosevka Kathy Extended, monospace;
  font-stretch: expanded;

  &.selected {
    background-color: var(--color-thistle);
    filter: initial;
    top: 0;
    z-index: 2;
  }
  
  &:hover:not(.selected) {
    filter: brightness(90%);
  }

  &:focus {
    outline: none;
  }
`;

const TabButton = styled.div`
    display: inline-block;
    border: none;
    margin: 0 8px;
    cursor: pointer;
    user-select: none;
  
    &:first-child {
        margin-left: 0;
    }
  
    &:last-child {
        margin-right: 0;
    }
`;

const TabLabel = styled.div`
    display: inline-block;
    color: white;
    cursor: default;
    user-select: none;
  
    &.editing {
        cursor: text;
        user-select: initial;
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
  z-index: 1;
  
  .debug-current-line {
    background-color: var(--color-for-current-highlight);
    position: absolute;
  }
  
  &.visible {
    display: block;
  }
`;

const EasterEgg = styled('iframe')`
    display: none;
    position: absolute;
    top: 32px;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid var(--color-thistle);
    z-index: 1;
  
    &.visible {
        display: block;
    }
`;

export default class EditorTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
        this.labelRef = null;
    }

    render() {
        const editorClassName = [
            ...(this.props.selected ? ['visible'] : []),
            ...(this.props.readOnly ? ['read-only'] : []),
        ].join(' ');

        let content = (
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
        );
        if (this.props.easterEgg)
            content = (
                <EasterEgg
                        className={editorClassName}
                        width={"100%"}
                        height={"100%"}
                        src={"https://www.youtube.com/embed/dQw4w9WgXcQ?si=U1HCX6HQrqQcFlZW?autoplay=1"}
                        title={"YouTube video player"}
                        frameBorder={0}
                        allow={"autoplay *; encrypted-media; picture-in-picture;"}
                        referrerPolicy={"strict-origin-when-cross-origin"}
                        allowFullScreen={true}
                />
            );

        return (
            <>
                <Tab
                    className={this.props.selected ? 'selected' : ''}
                    onClick={_ => this.props.handleTabSelected()}
                >
                    <TabButton
                        title={'Rename file'}
                        onClick={e => { e.stopPropagation(); this.setState({ editing: true }); }}
                    >
                        ✎
                    </TabButton>
                    <TabLabel
                        ref={ref => this.labelRef = ref}
                        className={this.state.editing ? 'editing' : ''}
                        contentEditable={this.state.editing}
                        spellCheck={false}
                        onBlur={e => this.handleLabelBlur(e)}
                        onKeyDown={e => this.handleLabelKeyDown(e)}
                        suppressContentEditableWarning={true}
                    >
                        {this.props.label}
                    </TabLabel>
                    <TabButton
                        title={'Close file'}
                        onClick={e => { e.stopPropagation(); this.props.handleTabClosed(); }}
                    >×</TabButton>
                </Tab>

                {content}
            </>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.editing && this.state.editing)
            this.labelRef.focus();
    }

    handleLabelKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.target.innerText.trim())
                e.target.blur();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            e.target.innerText = this.props.label;
            e.target.blur();
        }
    }

    handleLabelBlur(e) {
        this.setState({ editing: false });
        this.props.handleTabRenamed(e.target.innerText);
    }
}