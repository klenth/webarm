import styled from 'styled-components';
import React from 'react';
import './style.css';

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

export default class NzcvDisplay extends React.Component {

    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={'nzcv-display'}>
                <div className={'N label'}>N</div>
                <div className={'N value'}>{this.props.N}</div>
                <div className={'Z label'}>Z</div>
                <div className={'Z value'}>{this.props.Z}</div>
                <div className={'C label'}>C</div>
                <div className={'C value'}>{this.props.C}</div>
                <div className={'V label'}>V</div>
                <div className={'V value'}>{this.props.V}</div>
            </div>
        );
    }
}
