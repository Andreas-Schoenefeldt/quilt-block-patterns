import React from 'react';
import store from '../redux/store';
import { getPatterns, getPattern } from '../redux/selectors';

const getNextColorId = (colorId) => {
    const availableColors = getPatterns(store.getState());
    return availableColors[
        availableColors.indexOf(colorId) + 1 >= availableColors.length ? 0 : availableColors.indexOf(colorId) + 1
    ];
};

export default class SubCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            colors: ['default', 'default', 'default', 'default'],
            selecteds: [false, false, false, false]
        };

        this.getColorStyles = this.getColorStyles.bind(this);
        this.getSelectedClass = this.getSelectedClass.bind(this);
    }

    reset () {
        this.setState({ selected : null });
    }

    mouseMove (e) {

        let bounds = this.refs.subcell.getBoundingClientRect();
        let d = bounds.width / 2;
        let selected;

        // moving the center of the system to the middle
        let x = e.pageX - bounds.x - window.pageXOffset - d;
        let y = e.pageY - bounds.y - window.pageYOffset - d;

        let xN = x < 0 ? x * -1 : x;
        let yN = y < 0 ? y * -1 : y;

        if ( x < 0 && xN > yN ) {
            selected = 1;
        } else if (x > 0 && xN > yN) {
            selected = 3;
        } else if (y < 0 && xN < yN) {
            selected = 2;
        } else if (y > 0 && xN < yN) {
            selected = 4;
        }

        this.setState({selected: selected});
    }

    handleClick () {
        const state = this.state;
        const mainTriangleId = this.state.selected - 1;
        const nextMainTriangleId = mainTriangleId + 1 < 4 ? mainTriangleId + 1 : 0;
        const currentColorId = state.colors[mainTriangleId];
        const newColor = getNextColorId(currentColorId);

        // check, if there was already a selection
        if (mainTriangleId)


        if (state.selecteds[nextMainTriangleId]) {
            // reset
            state.colors = ['default', 'default', 'default', 'default'];
            state.selecteds = [false, false, false, false];
        }

        // set the new color
        for (let i = 0; i < 4; i++) {
            if (this.getSelectedClass(i + 1)) {
                state.colors[i] = newColor;
                state.selecteds[mainTriangleId] = true;
            }
        }

        this.setState(state);
    }

    getSelectedClass (triangleId) {
        if (this.state.selected && [this.state.selected, this.state.selected + 1 < 5 ? this.state.selected + 1 : 1].indexOf(triangleId) > -1) {
            return ' selected';
        }

        return '';
    }

    getColorStyles (triangleId) {
        const styles = {};
        const currentColor = getPattern(store.getState(), this.state.colors[triangleId - 1]).color;

        if (this.getSelectedClass(triangleId)) {
            styles.opacity = 0.5;
            styles.background = '#000';
        } else {
            styles.background = currentColor;
        }

        return styles;
    }

    render () {
        return <div ref="subcell"
                    className={'subcell' + (this.props.configurable ? ' subcell--configurable' : '')}
                    onMouseMove={this.props.configurable ? this.mouseMove.bind(this) : null}
                    onMouseLeave={this.reset.bind(this)}
                    onClick={this.props.configurable ? this.handleClick.bind(this) : null}
        >
            <div className={'triangle triangle--1' + this.getSelectedClass(1)}><span className={'triangle__inset'} style={this.getColorStyles(1)}/></div>
            <div className={'triangle triangle--2' + this.getSelectedClass(2)}><span className={'triangle__inset'} style={this.getColorStyles(2)}/></div>
            <div className={'triangle triangle--3' + this.getSelectedClass(3)}><span className={'triangle__inset'} style={this.getColorStyles(3)}/></div>
            <div className={'triangle triangle--4' + this.getSelectedClass(4)}><span className={'triangle__inset'} style={this.getColorStyles(4)}/></div>
        </div>
    }

}