import styled from 'styled-components';
import React from 'react';

const displayHeight = '24px';
//const chromeColor = '#00b5e2';
const chromeColor = '#8252C7';
const updatedChromeColor = 'var(--color-copper)';
const foreColor = 'white';
const textColor = 'black';

const Display = styled.div`
  border: 3px solid ${chromeColor};
  border-radius: 8px;
  color: #00b5e2;
  background-color: ${chromeColor};
  padding: 0;
  --display-height: ${displayHeight};
  height: var(--display-height);
  font-size: 1rem;
  margin: 2px;
  cursor: default;
  user-select: none;
  
  display: grid;
  grid-template-columns: repeat(4, min-content 1fr);
`;

const Label = styled.div`
  padding: 0 8px;
  font-family: monospace;
  margin-right: 2px;
  line-height: var(--display-height);
  height: var(--display-height);
  display: inline-block;
  width: 1em;
  text-align: center;
  color: ${foreColor};
  background-color: ${props => props.updated ? updatedChromeColor : chromeColor};
`;

const Value = styled.div`
  display: inline-block;
  width: 1em;
  font-family: monospace;
  color: var(--color-for-text);

  text-align: center;
  white-space: nowrap;
  height: var(--display-height);
  line-height: var(--display-height);
  background-color: var(--color-for-background);
  border-radius: 4px;
  padding: 0 8px;

  justify-self: center;
`;

export default class NzcvDisplay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Display>
                <Label updated={this.props.updatedN}>N</Label>
                <Value>{this.props.N}</Value>
                <Label updated={this.props.updatedZ}>Z</Label>
                <Value>{this.props.Z}</Value>
                <Label updated={this.props.updatedC}>C</Label>
                <Value>{this.props.C}</Value>
                <Label updated={this.props.updatedV}>V</Label>
                <Value>{this.props.V}</Value>
            </Display>
        );
    }
}
