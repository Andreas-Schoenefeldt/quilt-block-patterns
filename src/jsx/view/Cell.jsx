import React from 'react';

export default class Config extends React.Component {
    render () {
        return <div className={'cell'} style={{width: this.props.width}}><div className={'cell__inner'} /></div>
    }
}