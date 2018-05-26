import PropTypes from 'prop-types';

/**
 * Prop type shared between display and edit
 */
export const thingPropType = PropTypes.string;

/**
 * Display propTypes
 *
 * @type {{thing: *}}
 */
export const displayPropTypes = {
    thing: thingPropType,
};

/**
 * Edit prop types
 * @type {{thing: *, value: *, label: *, onChange: *, idAttr: *}}
 */
export  const editPropTypes = {
    ...displayPropTypes,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    idAttr: PropTypes.string.isRequired
};