import styled from 'styled-components';
import React from 'react';
import SimulatorMemory from '../../arm32sim/SimulatorMemory';

const Pane = styled.div`
    margin: 4px;
    border: 2px solid var(--color-thistle);
    border-radius: 8px;
    position: relative;
    padding-top: 1.5em;
    height: fit-content;
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
`;

const Field = styled.div`
    padding: 4px;
    font-family: monospace;
    cursor: default;
`;

const LineDisplay = styled.div`
    &:hover {
      background-color: var(--color-for-current-highlight);
    }
`;

const AddressDisplay = styled.span`

`;

const WordDisplay = styled.span`
    margin-left: 1.5ex;
  
    &.highlighted {
      background-color: var(--color-for-current-highlight);
    }
  
  &:hover {
    outline: 3px solid var(--color-for-current-highlight);
  }
`;

const ByteDisplay = styled.span`
    margin: 0 0.5ex;
`;

function formatByte(value) {
    const s = value.toString(16).toUpperCase();
    return (s.length === 1) ? '0' + s : s;
}

function formatAddress(addr) {
    const s = (addr >>> 0).toString(16).toUpperCase();
    return '0'.repeat(Math.max(0, 8 - s.length)) + s;
}

function formatWordTitle(addr, value) {
    const addrString = `0x${formatAddress(addr)}`;
    const hexString = `${formatAddress(value >>> 0)}`;
    const decString = `${value >> 0}`;
    const udecString = `${value >>> 0}`;
    return `Address ${addrString}:
    Hex: ${hexString}
    Dec: ${decString}
    UDec: ${udecString}`
}

export default class RamDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            offsetText: '0',
        };
    }

    render() {
        const numLines = 32;
        const wordsPerLine = 4;
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
            />
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
                        <input
                            type={'text'}
                            onChange={e => this.handleOffsetChange(e)}
                            onKeyDown={e => this.handleOffsetKeyDown(e)}
                            value={this.state.offsetText}
                        />
                        <button
                            onClick={() => this.handleScrollDown()}
                        >↓</button>
                        <button
                            onClick={() => this.handleScrollUp()}
                        >↑</button>
                    </label>
                </Controls>
                <Field>
                    {lines}
                </Field>
            </Pane>
        );
    }

    handleOffsetKeyDown(e) {
        if (e.key === 'Enter') {
            const newAddr = parseInt(e.target.value, 16);
            if (!isNaN(newAddr))
                this.setState({
                    ...this.state,
                    offset: (newAddr >>> 4) << 4
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
        const newOffset = ((Math.min(this.state.offset + 0x100, 0xffff_feff) & 0xffff_ffff) >>> 4) << 4;
        this.setState({
            ...this.state,
            offset: newOffset,
            offsetText: newOffset.toString(16).toUpperCase()
        });
    }

    handleScrollUp() {
        const newOffset = ((Math.max(this.state.offset - 0x100, 0) & 0xffff_ffff) >>> 4) << 4;
        this.setState({
            ...this.state,
            offset: newOffset,
            offsetText: newOffset.toString(16).toUpperCase()
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

        const wordDisplays = [...Array(numWords).fill(0)].map((_, i) => (
            <WordDisplay
                key={`line_${lineNumber}_word_${i}`}
                className={(this.props.highlightWord === offset + 4 * i) ? 'highlighted' : ''}
                title={formatWordTitle(offset + 4 * i, mem.readWord(offset + 4 * i))}
            >{[...Array(4).fill(0)].map((_, b) => (
                <ByteDisplay
                    key={`line_${lineNumber}_word_${i}_${b}`}
                >{formatByte(mem.readByte(offset + 4 * i + b))}</ByteDisplay>
            ))}</WordDisplay>
        ));

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
