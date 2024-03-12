import styled from 'styled-components';
import React from 'react';
import './style.css';

const displayHeight = '24px';
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
  background-color: ${chromeColor};
`;

const Value = styled.div`
  display: inline-block;
  width: 1em;
  font-family: monospace;
  color: ${textColor};

  text-align: center;
  white-space: nowrap;
  height: var(--display-height);
  line-height: var(--display-height);

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
                <Label>N</Label>
                <Value>{this.props.N}</Value>
                <Label>Z</Label>
                <Value>{this.props.Z}</Value>
                <Label>C</Label>
                <Value>{this.props.C}</Value>
                <Label>V</Label>
                <Value>{this.props.V}</Value>
            </Display>
        );
    }
}
