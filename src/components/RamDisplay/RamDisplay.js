import styled from 'styled-components';
import React from 'react';
import SimulatorMemory from '../../arm32sim/SimulatorMemory';

const Field = styled.div`
    
`;

const LineDisplay = styled.div`

`;

const AddressDisplay = styled.span`
    font-family: monospace;
`;

const ByteDisplay = styled.span`
  margin: 0 0.5ex;
  font-family: monospace;
  
    &:nth-child(4n+2) {
      margin-left: 1.5ex;
    }
`;

function formatByte(value) {
    const s = value.toString(16);
    return (s.length === 1) ? '0' + s : s;
}

function formatAddress(addr) {
    const s = addr.toString(16);
    return '0'.repeat(8 - s.length) + s;
}

export default class RamDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
        };
    }

    render() {
        const numLines = 32;
        const bytesPerLine = 16;
        const mem = this.props.memory || new SimulatorMemory();
        const lines = [...Array(numLines).fill(0)].map((_, i) => (
            <Line
                lineNumber={i}
                memory={mem}
                numBytes={bytesPerLine}
                offset={this.state.offset + bytesPerLine * i}
                key={`line_${i}`}
            />
        ));

        return (
            <Field>
                {lines}
            </Field>
        );
    }
}

class Line extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const numBytes = this.props.numBytes || 16;
        const lineNumber = this.props.lineNumber || 0;
        const mem = this.props.memory || new SimulatorMemory();
        const offset = this.props.offset || 0;
        const byteDisplays = [...Array(numBytes).fill(0)].map((_, i) => (
            <ByteDisplay
                key={`line_${lineNumber}_${i}`}
            >{formatByte(mem.readByte(offset + i))}</ByteDisplay>
        ));

        return (
            <LineDisplay>
                <AddressDisplay
                    key={`line_${lineNumber}_address`}
                >{formatAddress(offset)}</AddressDisplay>
                {byteDisplays}
            </LineDisplay>
        );
    }
}
