import React from 'react';
import PropTypes from 'prop-types';
export  const DisplayBox = (props) => {
    return (
        <div>
            {props.content}
        </div>
    )
};

DisplayBox.propTypes = {
    content: PropTypes.string,
};