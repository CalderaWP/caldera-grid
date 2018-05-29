import React from 'react';
import {rowPropTypes} from "./propTypes";
import {Column} from "../Column/Column";

export const Row = (props) => {
    return (
        <div>
            {Object.keys(props.columns).map( (columnId) => {
                const column = props.columns[columnId];
                const boxes = {};
                return(
                    <Column
                        key={columnId}
                        content={'Hi Roy'}
                        boxes={boxes}
                        boxMode={props.mode}
                        defaultMode={'editMode'}
                    />
                )
            })}
        </div>
    )

};

Row.propTypes =  rowPropTypes;
