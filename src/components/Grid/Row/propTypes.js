import PropTypes from 'prop-types';

export const rowPropTypes = {
    columns: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
};