import styled from 'styled-components';
import React from 'react';
import * as format from '../../format.js';
import * as Instruction from '../../arm32sim/Instruction.js';

const Tooltip = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: fit-content;
    top: ${props => `${props.y}px}`};
    margin: 0 auto;
    display: ${props => props.visible ? 'grid' : 'none'};
    background: #ffffffe0;
    padding: 16px;
    border: 2px solid var(--color-night);
    border-radius: 4px;
`;

const Title = styled.div`
    grid-column: 1 / span 2;
`;

const Label = styled.div`
    grid-column: 1;
    justify-self: end;
    padding-right: 8px;
`;

const Value = styled.div`
    grid-column: 2;
    justify-self: center;
    width: max-content;
`;

const Letter = styled.span`
    color: ${props => props.printable ? 'inherit' : '#888'};
`;

function asciiLetter(b) {
    if (b === 0)
        return '\\0';
    else if (b === 0x20)
        return '␣';
    else if (b > 0x20 && b <= 0x7e)
        return String.fromCharCode(b);
    else if (b === 0x09)
        return '\\t';
    else if (b === 0x0a)
        return '\\n';
    else if (b === 0x0d)
        return '\\r';

    return null;
}

export class WordTooltip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const addr = this.props.address || 0;
        const word = this.props.word || 0;
        const addrString = `0x${format.hexWord(addr)}`;
        const x = this.props.x || 0, y = this.props.y || 0;
        const visible = this.props.visible || false;

        const wordBytes = [(word >>> 24) & 0xff, (word >>> 16) & 0xff, (word >>> 8) & 0xff, word & 0xff];
        const asciiText = wordBytes.map((b, i) => {
            const letter = asciiLetter(b);
            return (
            <Letter
                key={i}
                printable={letter !== null && letter.length === 1 && letter !== '␣'}
            >{letter || '•'}</Letter>
        )});

        let instr = '';
        try {
            instr = Instruction.decode(word).toString();
        } catch (ex) {
            instr = '[invalid]';
        }

        return (
            <Tooltip
                    x={x}
                    y={y}
                    visible={visible}
            >
                <Title>Address {addrString}</Title>

                <Label>Hex:</Label>
                <Value>{format.hexWord(word)}</Value>

                <Label>Dec:</Label>
                <Value>{format.decimalWordSigned(word)}</Value>

                <Label>UDec:</Label>
                <Value>{format.decimalWordUnsigned(word)}</Value>

                <Label>Instr:</Label>
                <Value>{instr}</Value>

                <Label>Text:</Label>
                <Value>{asciiText}</Value>
            </Tooltip>
        );
    }
}