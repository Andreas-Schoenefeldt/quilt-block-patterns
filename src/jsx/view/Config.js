import React from 'react';
import Cell from '../controller/Cell';
import AddPatternButton from './pattern/AddPatternButton';
import AddBlockButton from './config/AddBlockButton';
import Pattern from './pattern/Pattern';
import { connect } from "react-redux";

import { getGridConfigState, getPatterns, getPattern } from '../redux/selectors';
import { updateGridConfig } from '../redux/actions';

class Config extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.config;

        this.configValueChange = this.configValueChange.bind(this);
    }

    configValueChange (e) {
        const config = {};
        const prop = e.target.name;

        if (! e.target.value) {
            config[prop] = e.target.value;
            return;
        } else {
            config[prop] = parseInt(e.target.value ? e.target.value : 0, 10);
            this.props.dispatch(updateGridConfig(config));
        }

        this.setState(config);
    }

    render () {
        return <div>
            <div className="form-group">
                <label htmlFor="input-width">Raster Breite:</label>
                <input type="text" className="form-control" id="input-width" name="width"
                       value={this.state.width} onChange={this.configValueChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="input-height">Raster Höhe:</label>
                <input type="text" className="form-control" id="input-height" name="height"
                       value={this.state.height} onChange={this.configValueChange}/>
            </div>

            <p>Farben/Muster:</p>
            <div className='pattern-row'>
                {this.props.patterns.map(function (pattern) {
                    return <Pattern key={pattern.id} pattern={pattern} />
                })}
            </div>
            <AddPatternButton/>

            <p>Basis Block erstellen:</p>
            <div className={'config-block'}>
                <div className={'grid'}>
                    <Cell width={'100%'} config={this.props.configBlock} configurable={true}/>
                </div>
            </div>
            <AddBlockButton/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        config: getGridConfigState(state),
        patterns: getPatterns(state).map( pId => getPattern(state, pId) ),
        configBlock: state.configBlock
    };
};

export default connect(mapStateToProps)(Config);