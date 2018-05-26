import React from 'react';

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
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};
