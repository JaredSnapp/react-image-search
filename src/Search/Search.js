import css from './Search.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ searchText }) {
    const [search, setSearch] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        searchText(search);
        setSearch('');
    }

    return (
            <form className={css.search} onSubmit={onSubmit}>
                <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
            </form>
    )
}

Search.propTypes = {
    searchText: PropTypes.string
}

export default Search;