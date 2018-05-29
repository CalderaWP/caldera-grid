import React from 'react';
import {rowPropTypes} from "./propTypes";

export const Row = (props) => {
    return (
        <div>
            {props.content}
        </div>
    )

};

Row.propTypes =  rowPropTypes;
