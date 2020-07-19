import React from 'react';
import './SideBar.css';
import SearchContainer from '../SearchContainer/SearchContainer';

const SideBar = ({ searchedText, handleSearch, submitSearch, searchResults, selectTrack }) => {

    const formatSearchContainer = () =>{
        return <SearchContainer handleSearch={handleSearch} submitSearch={submitSearch} />
    }

    const formatSearchResults = () =>{
        let listItems = [1, 2];
        if(Array.isArray(searchResults)){
            listItems = searchResults.map((item) =>
                <li id={item.id} className={item.artists[0].id} onClick={selectTrack}>
                    <div className="searchResultImage">
                        <img src={item.album.images[0].url} alt=""/>
                    </div>
                    <div className="searchResultText">
                        <h3 id={`${item.id}-resultName`}>{item.name}</h3>
                        <h5 id={`${item.id}-resultArtist`}>{item.artists[0].name}</h5>
                        {/* ${searchResults.indexOf(item)} */}
                    </div>
                </li>
            )
        }
        return <ul className="resultsList">{listItems}</ul>
    }

    return(
        <div className="sidebar">
            {formatSearchContainer()}
            {/* {searchedText} */}
            {formatSearchResults()}
        </div>
    )

}

export default SideBar;