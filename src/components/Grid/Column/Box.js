import React from 'react';
import PropTypes from 'prop-types';
export  const Box = (props) => {
    return (
        <div>
            {props.content}
        </div>
    )
};

Box.propTypes = {
    content: PropTypes.string,
};