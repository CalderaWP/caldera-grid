import React from 'react';
import PropTypes from 'prop-types';


export const chooseColumnBox = (boxMode,boxes,defaultMode) => {
    if( boxes.hasOwnProperty(boxMode)){
        return boxes[boxMode];
    }else if( boxes.hasOwnProperty(defaultMode)){
        return boxes[defaultMode]
    }
    return boxes[Object.keys(boxes)[0]];
};


export const Column = (props) => {
    const defaultMode = props.hasOwnProperty('defaultMode') ? props.defaultMode : 'previewMode';
    return (
        <div>
            {chooseColumnBox(props.boxMode,props.boxes,defaultMode)}
        </div>
    )
};

Column.propTypes = {
    content: PropTypes.string,
    boxes: PropTypes.object,
    boxMode: PropTypes.string,
    defaultMode: PropTypes.string
};