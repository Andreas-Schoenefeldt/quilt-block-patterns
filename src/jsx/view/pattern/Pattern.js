import React from "react";
import { HuePicker, CirclePicker } from 'react-color';

import { connect } from "react-redux";
import { getPatternColorPickerActive } from "../../redux/selectors";
import { showColorPicker } from "../../redux/actions";


const circleColors = ["#ffffff", '#000000', "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"]

const ColorPicker = (props) => {
    return (
        <div className={'color-picker'}>

            <h3 className={'color-picker__headline'}>Farbe ändern:</h3>

            <CirclePicker colors={circleColors} width={'100%'}/>

            <HuePicker color={ props.color } width={'100%'}/>
        </div>
    )
};

class Pattern extends React.Component {

    constructor(props) {
        super(props);

        this.pattern = this.props.pattern || { color: props.color, id: 'NEW' };

        this.state = {
            color: this.pattern.color,
            // showPicker: this.pattern.id === props.colorPickerActiveFor
        };

        this.showPicker = this.showPicker.bind(this);
    }

    showPicker () {
        this.props.dispatch(showColorPicker(this.pattern.id));
    }

    render () {
        return <div className={'pattern-wrp'}>
            <div className={'pattern'} style={{background: this.state.color}}
                    title={this.pattern.name ? this.pattern.name : null}
                    onClick={this.showPicker}
        />
            { this.props.showPickerFor === this.pattern.id ? <ColorPicker color={this.state.color}/> : null }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        showPickerFor: getPatternColorPickerActive(state)
    };
};

export default connect(mapStateToProps)(Pattern);