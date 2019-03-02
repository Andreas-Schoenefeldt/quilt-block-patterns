import React from "react";
import Pattern from "./Pattern";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

import { addPattern } from '../../redux/actions';

const newPatternColor = '#4caf50';

class AddPatternButton extends React.Component {

    constructor(props) {
        super(props);

        this.color = newPatternColor;

        this.handleAddColor = this.handleAddColor.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    handleAddColor () {
        this.props.dispatch(addPattern(this.color));
    }

    setColor (color) {
        this.color = color;
    }

    render () {
        return (
            <div className='pattern-row'>
                <Pattern color={this.color} onUpdate={this.setColor}/>
                <button onClick={this.handleAddColor} className='btn btn-info'
                        title={'Eine weitere Farbe oder ein weiteres Muster hinzufügen'}>
                    <FontAwesomeIcon icon='plus'/> Farbe/Muster
                </button>
            </div>
        )
    }
}

export default connect()(AddPatternButton);