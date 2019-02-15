import React from 'react';
import SubCell from './SubCell';

export default class Config extends React.Component {
    render () {
        return <div className={'cell'} style={{width: this.props.width ? this.props.width : '100%' }}>
            <div className={'cell__inner'}>
                {this.props.subCells ? this.props.subCells.map( function (subCell, i) {
                    return subCell ? <SubCell key={i} configurable={this.props.configurable} /> : null;
                }.bind(this)) : null }
            </div>
        </div>
    }
}