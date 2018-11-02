import PropTypes from 'prop-types';

const clientShape = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // address: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
     company: PropTypes.string.isRequired
    // job: PropTypes.string.isRequired,
    // contact: PropTypes.string.isRequired,
    // address: PropTypes.string.isRequired,

});

export default clientShape;