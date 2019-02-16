import React from "react";
import { HuePicker, CirclePicker } from 'react-color';

import { connect } from "react-redux";
import { getPatternColorPickerActive } from "../../redux/selectors";
import { showColorPicker, changePatternColor } from "../../redux/actions";


const circleColors = ["#ffffff", '#000000', "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]

const ColorPicker = (props) => {
    return (
        <div className={'color-picker'}>
            <CirclePicker colors={circleColors} width={'auto'} onChange={props.handleChange}/>
            <hr/>
            <HuePicker color={ props.color } width={'100%'} onChange={props.handleChange}/>
            <button className='btn btn-primary btn-sm' onClick={props.handleClose}>Ok</button> <button className='btn btn-light btn-sm' onClick={props.handleReset}>Cancel</button>
        </div>
    )
};

class Pattern extends React.Component {

    constructor(props) {
        super(props);

        this.pattern = this.props.pattern || { color: props.color, id: 'NEW' };
        this.resetColor = null;

        this.state = {
            color: this.pattern.color
        };

        this.showPicker = this.showPicker.bind(this);
        this.hidePicker = this.hidePicker.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    showPicker () {
        this.resetColor = this.state.color;
        this.props.dispatch(showColorPicker(this.pattern.id));
    }

    hidePicker () {
        this.props.dispatch(showColorPicker(null));
    }

    handleReset () {
        this.handleChange({hex: this.resetColor});
        this.hidePicker();
    }

    handleChange (color) {
        this.props.dispatch(changePatternColor(color.hex, this.pattern.id));
        this.setState({color: color.hex});

        if (this.props.onUpdate) {
            this.props.onUpdate(color.hex);
        }
    }

    render () {
        return <div className={'pattern-wrp'}>
            <div className={'pattern'} style={{background: this.state.color}}
                    title={this.pattern.name ? this.pattern.name : null}
                    onClick={this.showPicker}
        />
            { this.props.showPickerFor === this.pattern.id ? <ColorPicker
                color={this.state.color}
                handleChange={this.handleChange}
                handleClose={this.hidePicker}
                handleReset={this.handleReset}/> : null
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        showPickerFor: getPatternColorPickerActive(state)
    };
};

export default connect(mapStateToProps)(Pattern);