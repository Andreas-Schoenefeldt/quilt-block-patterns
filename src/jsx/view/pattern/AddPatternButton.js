import React from "react";
import Pattern from "./Pattern";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

import { addPattern } from '../../redux/actions';

const newPatternColor = '#40862D';

const AddPatternButton = ({ dispatch }) => {
    return (
        <div className='pattern-row'>
            <Pattern color={newPatternColor}/>
            <button onClick={ () => dispatch(addPattern(newPatternColor)) } className='btn btn-info' title={'Eine weitere Farbe oder ein weiteres Muster hinzufügen'}>
                <FontAwesomeIcon icon='plus'/> Farbe/Muster
            </button>
        </div>
    )
};

export default connect()(AddPatternButton);