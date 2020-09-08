import React from 'react';
// import './SideBar.css';
import SearchContainer from '../SearchContainer/SearchContainer';


const SideBar = ({ searchedText, handleSearch, submitSearch, searchResults, selectTrack }) => {

    const formatSearchContainer = () =>{
        return <SearchContainer handleSearch={handleSearch} submitSearch={submitSearch} />
    }

    //takes the search results from a parent component and maps them to a list of divs
    //the id for the track and artist names are used when displaying the selected track under the generated image
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
                    </div>
                </li>
            )
        }
        return <ul className="resultsList">{listItems}</ul>
    }

    return(
        <div className="sidebar-metacontainer">
            <div className="sidebar">
                
                {formatSearchContainer()}
                {formatSearchResults()}
                
            </div>
            <div className="sidebar-footer">
                {/* that's my name, hi */}
                <a href="https://octavcodrea.com">Octav Codrea</a>
            </div>

        </div>
    )

}

export default SideBar;