import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <h2>
            {props.title}
        </h2>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: 'Header message'
};

export default Header;