import React from 'react';

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

        </div>
    }
}