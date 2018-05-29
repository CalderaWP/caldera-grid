import React from 'react';
import PropTypes from 'prop-types';
export  const EditBox = (props) => {
    return (
        <div>
            <input type={'text'} value={props.content}/>
        </div>
    )
};

EditBox.propTypes = {
    content: PropTypes.string.isRequired,
};