import React from 'react';
import Config from '../view/Config.jsx';
import Grid from '../view/Grid.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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