import styled from 'styled-components';
import React from 'react';
import './style.css';

const DisplayMode = {
    Binary: 'b',
    DecimalSigned: 'ds',
    DecimalUnsigned: 'du',
    Hexadecimal: 'h'
};

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
            <div className={'register-display'}>
                <span className={'label'}>{this.props.label}</span>
                <span className={'value'}>{valueText(this.props.value, this.state.displayMode)}</span>
                <span className={'modes'}>
                    {modeSelectors}
                </span>
            </div>
        );
    }

    handleModeClick(mode) {
        const newState = Object.assign({}, this.state);
        newState.displayMode = mode;

        this.setState(newState);
    }
}

function ModeSelector(props) {
    let className = 'mode';
    if (props.selected)
        className += ' selected';

    const mode = props.mode;
    const text =
        (mode === DisplayMode.Binary) ? 'Bin'
        : (mode === DisplayMode.DecimalSigned) ? 'Dec'
        : (mode === DisplayMode.DecimalUnsigned) ? 'UDec'
        : (mode === DisplayMode.Hexadecimal) ? 'Hex'
        : '???';

    return (
        <span
            className={className}
            onClick={() => props.handleClick(props.mode)}
        >
            {text}
        </span>
    );
}