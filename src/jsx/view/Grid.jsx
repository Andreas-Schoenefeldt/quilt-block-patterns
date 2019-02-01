import React from 'react';
import Cell from './Cell.jsx';

export default class Grid extends React.Component {
    render () {

        let rows = [];
        for (let y = 0; y < this.props.cellsY; y++) {
            let cells = [];
            for (let x = 0; x < this.props.cellsX; x++) {
                cells.push(<Cell key={'cell-' + x + '_' + y} width={(100/this.props.cellsX) + '%'}/>);
            }

            rows.push(<div className={'grid-row'} key={'row-' + y}>{cells}</div>);
        }


        return <div>{rows}</div>
    }
}