import React from 'react';
import './SideBar.css';
import SearchContainer from '../SearchContainer/SearchContainer';

const SideBar = ({ searchedText, handleSearch, submitSearch, searchResults, selectTrack }) => {

    const showAppInfo = (bool) =>{
        var appInfo = document.getElementById('appInfo');
        if(bool){
            appInfo.style.display = "inline-block";
        }else{
            appInfo.style.display = "none";
        }
    }

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
        <div className="sidebar-metacontainer">
            <div className="sidebar">
                <div className="sidebar-header">

                    <h1>Songvis</h1>
                    <p>A song data visualizer <span 
                    role="img"
                    aria-label="info"
                    onMouseEnter={() => showAppInfo(true)}
                    onMouseLeave={() => showAppInfo(false)}>
                        ⏺️</span></p>
                </div>

                

                {formatSearchContainer()}
                {/* {searchedText} */}
                {formatSearchResults()}

                
            </div>
            <div className="sidebar-footer">
                <a href="https://octavcodrea.com">Octav Codrea</a>
            </div>

        </div>
    )

}

export default SideBar;