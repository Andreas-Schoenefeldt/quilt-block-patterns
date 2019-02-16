import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

import { addPattern } from '../../redux/actions';

const AddPatternButton = ({ addPattern }) => {
    return (
        <button className='btn btn-link' title={'Eine weitere Farbe oder ein weiteres Muster hinzufügen'}><FontAwesomeIcon icon='plus'/> Farbe/Muster</button>
    )
};

export default connect(
    null,
    { addPattern }
)(AddPatternButton);