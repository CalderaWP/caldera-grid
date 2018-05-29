import React from 'react';
import { connect } from 'react-redux'
import {Grid} from "../../components/Grid/Grid";
import {rowPropTypes} from "../../components/Grid/Row/propTypes";
import {setRow} from "../../components/Grid/Grid/state/actions";
import {getRows} from "../../components/Grid/Grid/state/selectors";

const mapStateToProps = (state) => {
    return {
        rows: getRows(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (newValue) => {
            dispatch(setRow(newValue))
        }
    }
};


export const GridWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

GridWrapped.propTypes = rowPropTypes;