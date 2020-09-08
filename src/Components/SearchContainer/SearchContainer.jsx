import React from 'react';
// import "./SearchContainer.css"

const SearchContainer = ({ searchedText, handleSearch, submitSearch }) => {

    // search container component inside the sidebar
    return(
        <div className="searchContainer">
            <form onSubmit={submitSearch} >
                <input type="text" onChange={handleSearch} className="searchInput" />
                <input type="submit" className="searchButton" value="Search"/>

            </form>
        </div>
    )

}

export default SearchContainer;