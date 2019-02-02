import React from 'react';
import Cell from '../controller/Cell.jsx';

export default class Config extends React.Component {
    render () {
        return <div>
            <div className="form-group">
                <label htmlFor="input-width">Anzahl Breite:</label>
                <input type="text" className="form-control" id="input-width" name="countWidth"
                       value={this.props.config.countWidth} onChange={this.props.configValueChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="input-height">Anzahl Höhe:</label>
                <input type="text" className="form-control" id="input-height" name="countWidth"
                       value={this.props.config.countHeight} onChange={this.props.configValueChange}/>
            </div>

            <p>Farben/Muster:</p>
            {this.props.patterns.map(function (pattern) {
                return <div key={pattern.id} className={'pattern'} style={{background: pattern.color}}>{pattern.name}</div>
            })}

            <p>Basis Block erstellen:</p>
            <div className={'grid'}>
                <Cell width={'100%'} configurable={true}/>
            </div>
        </div>
    }
}