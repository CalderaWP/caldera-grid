import React from 'react';
import { connect } from 'react-redux'
import {Row} from "../../components/Grid/Row";
import {rowPropTypes} from "../../components/Grid/Row/propTypes";

const mapStateToProps = (state) => {
    return {
        thing: getThing(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (newValue) => {
            dispatch(setThing(newValue))
        }
    }
};


export const RowWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);

RowWrapped.propTypes = rowPropTypes;