import React from 'react';
import reactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Index = (props) => {
    return (
        <h2>
            o2i {props.a}
        </h2>
    );
};

Index.propTypes = {
    a: PropTypes.string.isRequired
};

reactDOM.render(
    <Index a="a" />,
    document.getElementById('root')
);