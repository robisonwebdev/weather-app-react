import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../../styles/components/header/search/SearchBar.css';

const SearchBar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className='header_search_bar'>
            <form onSubmit={handleSubmit}>
                <input type='text' />
                <button type='submit'>
                    <SearchIcon />
                </button>
            </form>
        </section>
    );
};

export default SearchBar;