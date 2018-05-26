import React from 'react';
import {editPropTypes} from "./PropTypes";

export const Edit = (props) => {
    return (
        <div>
            <label
                htmlFor={props.idAttr}
            >
                {props.label}
            </label>
            <input
                id={props.idAttr}
                value={props.thing}
                onChange={(event) => {
                    props.onChange(event.target.value);
                }}
            />
        </div>
    );
};

Edit.propTypes = editPropTypes;