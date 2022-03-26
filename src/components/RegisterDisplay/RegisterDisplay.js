import styled from 'styled-components';
import React from 'react';
import './style.css';

const DisplayMode = {
    Binary: 'b',
    DecimalSigned: 'ds',
    DecimalUnsigned: 'du',
    Hexadecimal: 'h'
};

const displayHeight = '32px';
//const chromeColor = '#00b5e2';
const chromeColor = '#8252C7';
const foreColor = 'white';
const textColor = 'black';

const Display = styled.div`
  border: 3px solid ${chromeColor};
  border-radius: 8px;
  color: #00b5e2;
  background-color: white;
  padding: 0;
  --display-height: ${displayHeight};
  height: var(--display-height);
  font-size: 1rem;
  margin: 4px;
  cursor: default;
  user-select: none;
`;

const Label = styled.div`
  padding: 0 8px;
  font-family: monospace;
  margin-right: 8px;
  line-height: var(--display-height);
  height: var(--display-height);
  display: inline-block;
  width: 32px;
  text-align: center;
  color: ${foreColor};
  background-color: ${chromeColor};
`;

const Value = styled.div`
  display: inline-block;
  width: 192px;
  font-family: monospace;
  color: ${textColor};

  text-align: center;
  white-space: nowrap;
  height: var(--display-height);
  line-height: var(--display-height);
`;

const Modes = styled.span`
  margin: 0 4px;
  font-size: 0.7rem;
`;

const Mode = styled.span`
  color: ${({ selected }) => selected ? foreColor : chromeColor};
  background-color: ${({ selected }) => selected ? chromeColor : foreColor};
  padding: 2px 3px;
  cursor: pointer;
`;

function insertCommas(n) {
    const hasSign = (n[0] === '+' || n[0] === '-');

    if ((hasSign && n.length <= 5)
            || (!hasSign && n.length <= 4))
        return n;

    let digits = n.slice(hasSign ? 1 : 0);
    const sign = n.slice(0, hasSign ? 1 : 0);

    for (let i = digits.length - 3; i > 0; i -= 3)
        digits = digits.slice(0, i) + ',' + digits.slice(i);

    return sign + digits;
}

function valueText(value, mode) {
    if (value === null)
        return null;
    if (mode === DisplayMode.Binary) {
        let s = '';
        for (let i = 0; i < 32; ++i) {
            s = '' + (value & 1) + s;
            if (i % 4 === 3 && i !== 31)
                s = ' ' + s;
            value >>>= 1;
        }

        return '0b' + s;
    } else if (mode === DisplayMode.DecimalSigned)
        if (value > 0)
            return insertCommas('+' + value);
        else
            return insertCommas('' + value);
    else if (mode === DisplayMode.DecimalUnsigned) {
        let lower = (value & 0x7fffffff) + 0.0;
        if ((value >>> 31) !== 0)
            lower += 2147483648.0;
        return insertCommas('' + lower);
    } else if (mode === DisplayMode.Hexadecimal) {
        let s = '';
        for (let i = 0; i < 8; ++i) {
            let nybble = value & 0xf;
            if (nybble < 10)
                s = '' + nybble + s;
            else
                s = String.fromCharCode('A'.charCodeAt(0) + (nybble - 10)) + s;

            if (i % 2 === 1 && i !== 7)
                s = ' ' + s;

            value >>>= 4;
        }

        return s;
    } else
        return null;
}

export default class RegisterDisplay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            displayMode: DisplayMode.Hexadecimal,
        }
    }

    render() {
        const modeSelectors = [
            /*DisplayMode.Binary,*/ DisplayMode.DecimalSigned, DisplayMode.DecimalUnsigned, DisplayMode.Hexadecimal
        ].map(mode => (
                <ModeSelector
                    key={mode}
                    mode={mode}
                    selected={this.state.displayMode === mode}
                    handleClick={mode => this.handleModeClick(mode)}
                />
            ));

        return (
            <Display>
                <Label>{this.props.label}</Label>
                <Value>&nbsp;{valueText(this.props.value, this.state.displayMode)}&nbsp;</Value>
                <Modes>
                    {modeSelectors}
                </Modes>
            </Display>
        );
    }

    handleModeClick(mode) {
        const newState = Object.assign({}, this.state);
        newState.displayMode = mode;

        this.setState(newState);
    }
}

function ModeSelector(props) {
    const mode = props.mode;
    const text =
        (mode === DisplayMode.Binary) ? 'Bin'
        : (mode === DisplayMode.DecimalSigned) ? 'Dec'
        : (mode === DisplayMode.DecimalUnsigned) ? 'UDec'
        : (mode === DisplayMode.Hexadecimal) ? 'Hex'
        : '???';

    return (
        <Mode
            selected={props.selected}
            onClick={() => props.handleClick(props.mode)}
        >
            {text}
        </Mode>
    );
}