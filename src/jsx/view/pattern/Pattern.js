import React from "react";

const Pattern = (props) => {
    return <div className={'pattern'} style={{background: props.color}} title={props.name ? props.name : null}></div>
};

export default Pattern;