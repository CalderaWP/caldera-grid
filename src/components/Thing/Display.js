import React from 'react';
import {displayPropTypes} from "./PropTypes";

export const  Display = (props) => {
    const thing = undefined !== props.thing ? props.thing : 'Nothing';
    return (
        <div>{thing}</div>
    );
};


Display.propTypes = displayPropTypes;

