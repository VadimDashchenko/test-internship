import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './styles.scss';

const Search = ({ searchQuery, onSearchSubmit, onSearchChange }) => (
    <Input icon='search' className="Search" onChange={onSearchChange} value={searchQuery} />
);



Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default Search;
