import React from 'react';

export const  Display = (props) => {
    const thing = undefined !== props.thing ? props.thing : 'Nothing';
    return (
        <div>{thing}</div>
    );
};
