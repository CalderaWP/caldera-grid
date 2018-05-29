import React from 'react';
import { connect } from 'react-redux'
import {Row} from "../../components/Grid/Row";
import {rowPropTypes} from "../../components/Grid/Row/propTypes";
import {getColumns} from "../../components/Grid/Row/state/selectors";
import {setRow} from "../../components/Grid/Grid/state/actions";

const mapStateToProps = (state) => {
    return {
        columns: getColumns(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (newValue) => {
            dispatch(setRow(newValue))
        }
    }
};


export const RowWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);

RowWrapped.propTypes = rowPropTypes;