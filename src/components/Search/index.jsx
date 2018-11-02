import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './styles.scss';

const Search = ({ searchQuery, onSearchSubmit, onSearchChange }) => (

    <Input icon='search' className="Search" onChange={onSearchChange} value={searchQuery} />
//     <form action="/" className="Search" onSubmit={onSearchSubmit}>
//         <Input icon='search' className="" onChange={onSearchChange} value={searchQuery} placeholder='Search...' />
// </form>


    // <form action="/" className="Search" onSubmit={onSearchSubmit}>
    //     <input type="search" className="Search-input" onChange={onSearchChange} value={searchQuery} />
    //     <button type="submit" className="Search-submit">
    //         Search
    //     </button>
    // </form>

);



Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default Search;
