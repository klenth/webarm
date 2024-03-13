import styled from 'styled-components';
import React from 'react';
import * as format from '../../format.js';
//import './style.css';

const DisplayMode = {
    Binary: 'b',
    DecimalSigned: 'ds',
    DecimalUnsigned: 'du',
    Hexadecimal: 'h'
};

const displayHeight = '24px';
//const chromeColor = '#00b5e2';
const chromeColor = 'var(--color-thistle)';
const updatedChromeColor = 'var(--color-copper)';
const foreColor = 'white';
const textColor = 'black';

const Display = styled.div`
  --display-height: ${displayHeight};
  --chrome-color: ${props => props.updated ? updatedChromeColor : chromeColor};
  position: relative;
  border: 3px solid var(--chrome-color);
  border-radius: 8px;
  color: #00b5e2;
  background-color: white;
  padding: 0;
  height: var(--display-height);
  font-size: 0.8rem;
  margin: 2px;
  cursor: default;
  user-select: none;
  width: max-content;
`;

const Label = styled.div`
  padding: 0 2px;
  font-family: monospace;
  margin-right: 4px;
  line-height: var(--display-height);
  height: var(--display-height);
  display: inline-block;
  width: 32px;
  text-align: center;
  color: ${foreColor};
  background-color: var(--chrome-color);
`;

const Value = styled.div`
  display: inline-block;
  width: 10em;
  font-family: monospace;
  color: ${textColor};

  text-align: center;
  white-space: nowrap;
  height: var(--display-height);
  line-height: var(--display-height);
`;

const Modes = styled.span`
  margin: 0 2px 0 18px;
  font-size: 0.7rem;
`;

const Mode = styled.span`
  color: ${({ selected }) => selected ? foreColor : 'var(--chrome-color)'};
  background-color: ${({ selected }) => selected ? 'var(--chrome-color)' : foreColor};
  border-radius: 4px;
  padding: 2px 2px;
  cursor: pointer;
`;

const CopyButton = styled.span`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3Ryb2tlPSIjODI1MkM3IiBmaWxsPSIjODI1MkM3IiBzdHJva2Utd2lkdGg9IjJweCIgZD0iTTUzLjk3OTE0ODksOS4xNDI5MDA1SDUwLjAxMDg0OWMtMC4wODI2OTg4LDAtMC4xNTYyMDA0LDAuMDI4Mzk5NS0wLjIzMzEwMDksMC4wNDY5OTk5VjUuMDIyOA0KCQlDNDkuNzc3NzQ4MSwyLjI1Myw0Ny40NzMxNDgzLDAsNDQuNjM5ODQ2OCwwaC0zNC40MjI1OTZDNy4zODM5NTE3LDAsNS4wNzkzNTE5LDIuMjUzLDUuMDc5MzUxOSw1LjAyMjh2NDYuODQzMjk5OQ0KCQljMCwyLjc2OTc5ODMsMi4zMDQ1OTk4LDUuMDIyODAwNCw1LjEzNzg5OTksNS4wMjI4MDA0aDYuMDM2NzAwMnYyLjI2Nzg5ODZDMTYuMjUzOTUyLDYxLjgyNzQwMDIsMTguNDcwMjUxMSw2NCwyMS4xOTU0NTE3LDY0DQoJCWgzMi43ODM2OTljMi43MjUyMDA3LDAsNC45NDE0OTc4LTIuMTcyNTk5OCw0Ljk0MTQ5NzgtNC44NDMyMDA3VjEzLjk4NjEwMDINCgkJQzU4LjkyMDY0NjcsMTEuMzE1NTAwMyw1Ni43MDQzNDk1LDkuMTQyOTAwNSw1My45NzkxNDg5LDkuMTQyOTAwNXogTTcuMTExMDUxNiw1MS44NjYxMDAzVjUuMDIyOA0KCQljMC0xLjY0ODc5OTksMS4zOTM4OTk5LTIuOTkwOTk5OSwzLjEwNjIwMDItMi45OTA5OTk5aDM0LjQyMjU5NmMxLjcxMjMwMzIsMCwzLjEwNjIwMTIsMS4zNDIyLDMuMTA2MjAxMiwyLjk5MDk5OTl2NDYuODQzMjk5OQ0KCQljMCwxLjY0ODc5OTktMS4zOTM4OTgsMi45OTExMDAzLTMuMTA2MjAxMiwyLjk5MTEwMDNoLTM0LjQyMjU5NkM4LjUwNDk1MTUsNTQuODU3MjAwNiw3LjExMTA1MTYsNTMuNTE0OTAwMiw3LjExMTA1MTYsNTEuODY2MTAwM3oNCgkJIE01Ni44ODg4NDc0LDU5LjE1Njc5OTNjMCwxLjU1MDYwMi0xLjMwNTUsMi44MTE1MDA1LTIuOTA5Njk4NSwyLjgxMTUwMDVoLTMyLjc4MzY5OQ0KCQljLTEuNjA0MjAwNCwwLTIuOTA5Nzk5Ni0xLjI2MDg5ODYtMi45MDk3OTk2LTIuODExNTAwNXYtMi4yNjc4OTg2aDI2LjM1NDE5NDYNCgkJYzIuODMzMzAxNSwwLDUuMTM3OTAxMy0yLjI1MzAwMjIsNS4xMzc5MDEzLTUuMDIyODAwNFYxMS4xMjc1OTk3YzAuMDc2OTAwNSwwLjAxODYwMDUsMC4xNTA0MDIxLDAuMDQ2OTk5OSwwLjIzMzEwMDksMC4wNDY5OTk5DQoJCWgzLjk2ODI5OTljMS42MDQxOTg1LDAsMi45MDk2OTg1LDEuMjYwOTAwNSwyLjkwOTY5ODUsMi44MTE1MDA1VjU5LjE1Njc5OTN6Ii8+DQo8L2c+DQo8L3N2Zz4=");
    background-size: 16px 16px;
    background-position-y: center;
    background-repeat: no-repeat;
    cursor: pointer;
    color: #8252C7;
    opacity: 20%;
  
    &:hover {
        opacity: 100%;
    }
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
    } else if (mode === DisplayMode.DecimalSigned) {
        /*value >>= 0;
        if (value > 0)
            return insertCommas('+' + (value >> 0));
        else
            return insertCommas('' + value);*/
        return format.decimalWordSigned(value);
    } else if (mode === DisplayMode.DecimalUnsigned) {
        return format.decimalWordUnsigned(value);
        /*let lower = (value & 0x7fffffff) + 0.0;
        if ((value >>> 31) !== 0)
            lower += 2147483648.0;
        return insertCommas('' + lower);*/
    } else if (mode === DisplayMode.Hexadecimal) {
        return format.hexWordBytes(value);
        /*let s = '';
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

        return s;*/
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
            DisplayMode.DecimalSigned, DisplayMode.DecimalUnsigned, DisplayMode.Hexadecimal
        ].map(mode => (
                <ModeSelector
                    key={mode}
                    mode={mode}
                    selected={this.state.displayMode === mode}
                    handleClick={mode => this.handleModeClick(mode)}
                />
            ));

        return (
            <Display
                updated={this.props.updated}
            >
                <Label>{this.props.label}</Label>
                <Value>&nbsp;{valueText(this.props.value, this.state.displayMode)}&nbsp;</Value>
                <CopyButton
                    title={'Copy'}
                    onClick={_ => this.copyText(valueText(this.props.value, this.state.displayMode))}
                />
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

    copyText(text) {
        if (navigator?.clipboard)
            navigator.clipboard.writeText(text);
    }
}

function ModeSelector(props) {
    const mode = props.mode;
    const [text, title] =
        (mode === DisplayMode.Binary) ? ['Bin', 'Binary']
        : (mode === DisplayMode.DecimalSigned) ? ['Dec', 'Signed decimal']
        : (mode === DisplayMode.DecimalUnsigned) ? ['UDec', 'Unsigned decimal']
        : (mode === DisplayMode.Hexadecimal) ? ['Hex', 'Hexadecimal word']
        : '???';

    return (
        <Mode
            selected={props.selected}
            onClick={() => props.handleClick(props.mode)}
            title={title}
        >
            {text}
        </Mode>
    );
}