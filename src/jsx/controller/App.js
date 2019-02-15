import React from 'react';
import Config from '../view/Config';
import Grid from '../view/Grid';

export default function App() {
    return (
        <div className="row">
            <div className="col-md-3">
                <Config/>
            </div>
            <div className="col">
            </div>
        </div>
    );
}

/*

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patterns: [{name: 'Grün', color: 'green', id: 1}, {name: 'Blau', color: 'blue', id: 2}],
            config: {
                countWidth: 5,
                countHeight: 5
            }
        };
    }


    configValueChange (e) {
        let config = this.state.config;
        config[e.target.name] = e.target.value;

        this.setState({config: config});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <Config
                        configValueChange={this.configValueChange.bind(this)}
                        config={this.state.config}
                        patterns={this.state.patterns}
                    />
                </div>
                <div className="col">
                    <Grid
                        cellsX={this.state.config.countWidth}
                        cellsY={this.state.config.countHeight}
                    />
                </div>
            </div>
        );
    }
}

*/