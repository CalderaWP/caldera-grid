import React from 'react';
import {Row} from "../Row";
import {gridPropTypes} from "./propTypes";

export const Grid = (props) => {
    return (
        <div className={'calderaGrid'}>
            {
                Object.keys(props.rows).map( (rowId ) => {
                    let row = props.rows[rowId];
                    return (
                        <Row
                            key={row.uuid}
                            content={row.content}
                        />
                    )
                })
            }
        </div>
    )
};

Grid.propTypes = gridPropTypes;