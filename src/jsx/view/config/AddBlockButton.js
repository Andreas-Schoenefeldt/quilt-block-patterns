import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";

class AddBlockButton extends React.Component {
    render () {
        return <button className='btn btn-info'
                       title={'Den aktuellen Block speichern'}>
            <FontAwesomeIcon icon='save'/> Block
        </button>
    }
}

export default connect()(AddBlockButton);

