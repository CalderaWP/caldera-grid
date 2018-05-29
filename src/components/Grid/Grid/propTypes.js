import PropTypes from 'prop-types';
export  const gridPropTypes = {
    rows: PropTypes.object.isRequired,
    onRowUpdate: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired
};