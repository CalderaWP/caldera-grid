import React from 'react';
import {Row} from "../Row";
import {gridPropTypes} from "./propTypes";
import {prepareRow} from "../Column/factory";

export const Grid = (props) => {
    return (
        <div className={'calderaGrid'}>
            {
                Object.keys(props.rows).map( (rowId ) => {
                    let row = prepareRow(props.rows[rowId]);
                    return (
                        <Row
                            key={row.uuid}
                            columns={row.columns}
                            mode={row.mode}
                            onUpdate={props.onRowUpdate}
                        />
                    )
                })
            }
        </div>
    )
};

Grid.propTypes = gridPropTypes;