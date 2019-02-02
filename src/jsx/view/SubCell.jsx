import React from 'react';

export default class SubCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    reset () {
        this.setState({selected : null});
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

    getSelectedClass (triangleId) {
        if (this.state.selected && [this.state.selected, this.state.selected + 1 < 5 ? this.state.selected + 1 : 1].indexOf(triangleId) > -1) {
            return ' selected';
        }

        return '';
    }

    render () {
        return <div ref="subcell" className={'subcell' + (this.props.configurable ? ' subcell--configurable' : '')} onMouseMove={this.props.configurable ? this.mouseMove.bind(this) : null} onMouseLeave={this.reset.bind(this)}>
            <div className={'triangle triangle--1' + this.getSelectedClass(1)}><span className={'triangle__inset'}/></div>
            <div className={'triangle triangle--2' + this.getSelectedClass(2)}><span className={'triangle__inset'}/></div>
            <div className={'triangle triangle--3' + this.getSelectedClass(3)}><span className={'triangle__inset'}/></div>
            <div className={'triangle triangle--4' + this.getSelectedClass(4)}><span className={'triangle__inset'}/></div>
        </div>
    }

}