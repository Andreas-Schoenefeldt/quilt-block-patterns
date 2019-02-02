import React from 'react';
import ViewCell from '../view/Cell.jsx';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subCells: [true, true, true, true]
        }
    }

    render () {
        return <ViewCell
            width={this.props.width}
            subCells={this.state.subCells}
            configurable={this.props.configurable}
        />
    }
}