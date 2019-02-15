import React from 'react';
import { connect } from "react-redux";

import { getGridConfigState } from '../redux/selectors';
import Cell from './Cell';

class Grid extends React.Component {
    render () {

        let rows = [];
        for (let y = 0; y < this.props.height; y++) {
            let cells = [];
            for (let x = 0; x < this.props.width; x++) {
                cells.push(<Cell key={'cell-' + x + '_' + y} width={(100/this.props.width) + '%'}/>);
            }

            rows.push(<div className={'grid-row'} key={'row-' + y}>{cells}</div>);
        }


        return <div className={'grid'}>{rows}</div>
    }
}

export default connect(getGridConfigState)(Grid);