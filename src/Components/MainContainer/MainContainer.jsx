import React from "react";
import SideBar from "../SideBar/SideBar.jsx";
import ImageContainer from "../ImageContainer/ImageContainer.jsx";
import "./MainContainer.css";


var client_id = "6e1dde8891e74eec96e04dfd313e1ebc";
var client_secret = "4b5a5de1e7ba44fea28195400c16b62b";
var token = "";
let fullDataArray = [];
let selectedTrackObject = [];
let selectedArtistArray = [];
let Instrumentalness = 0;


class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.formatSideBar = this.formatSideBar.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.selectTrack = this.selectTrack.bind(this);
    
  }

  state = {
    searchedText: "",
    searchedTextSubmitted: "",
    isLoaded: false,
    error: null,
    authToken: "",
    items: [],
    selectedTrackId: "",
    trackFeatures: "",
    selectedTrackArtistId: "",
    selectedTrackArtistGenre: "",
    artistGenre: "",
    selectedTrackName: '',
    selectedTrackArtist: '',
    loadImage: false
  };

  handleSearchChange = (event) => {
    this.setState({
      searchedText: event.target.value,
    });
  };

  submitSearch = (event, x) => {
    event.preventDefault();
    this.setState({
      searchedTextSubmitted: this.state.searchedText,
      searchedText: "",
    });
  };

  formatSideBar() {
    return (
      <SideBar
        searchedText={this.state.searchedText}
        handleSearch={this.handleSearchChange.bind(this)}
        submitSearch={this.submitSearch.bind(this)}
        searchResults={this.state.items}
        selectTrack={this.selectTrack}
      />
    );
  }

  formatImageContainer() {
    return (
      <ImageContainer
        tfAcousticness={this.state.trackFeatures.acousticness}
        tfDanceability={this.state.trackFeatures.danceability}
        tfEnergy={this.state.trackFeatures.energy}
        tfTempo={this.state.trackFeatures.tempo}
        tfInstrumentalness={Instrumentalness}
        tfValence={this.state.trackFeatures.valence}
        tfLoudness={this.state.trackFeatures.loudness}
        artistGenre={this.state.artistGenre}
        selectedTrackArtist={this.state.selectedTrackArtist}
        selectedTrackName={this.state.selectedTrackName}
        loadImage={this.state.loadImage}
      />
    );
  }

  
  fetchSearch() {
    fetch(
      `	https://api.spotify.com/v1/search?q=${this.state.searchedTextSubmitted}&type=track`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          fullDataArray = result.tracks.items;
          this.setState(
            {
              isLoaded: true,

              items: fullDataArray,
            },
            () => console.log(result)
          );
          console.log("items:", this.state.items);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  setLoadImageFalse = () => {
    this.setState({
      loadImage: false
    })
  }

  //gets called when the user selects a track in the results list
  //gets the artist and track name from the div and sets the state prop equal to them
  selectTrack(event) {
    var elementId = event.currentTarget.id;
    var elementClass = event.currentTarget.className;

    console.log(`${elementId}-resultName`);

    var elementTrackName = document.getElementById(`${elementId}-resultName`).textContent;
    var elementTrackArtist = document.getElementById(`${elementId}-resultArtist`).textContent;
    
    this.setState({
      selectedTrackArtist: elementTrackArtist,
      selectedTrackName: elementTrackName,
      selectedTrackId: elementId,
      selectedTrackArtistId: elementClass,
      loadImage: true
    });
    
    // get audio features for track
    fetch(`	https://api.spotify.com/v1/audio-features/${elementId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          selectedTrackObject = result;

          this.setState(
            {
              trackFeatures: selectedTrackObject,
            },
            () => console.log("track features: ", selectedTrackObject)
          );
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    // get artist's main genre for track
    fetch(`https://api.spotify.com/v1/artists/${elementClass}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          selectedArtistArray = result;
          let artistMainGenre = selectedArtistArray.genres[0];

          this.setState(
            {
              artistGenre: artistMainGenre,
            },
            () => console.log("artist main genre: ", artistMainGenre)
          );
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

      //reset 
      setTimeout(() => {this.setLoadImageFalse()}, 500);
  }


  componentDidMount(prevProps, prevState) {
    var request = require("request"); // "Request" library

    // your application requests authorization
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      form: {
        grant_type: "client_credentials",
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        token = body.access_token;
        var options = {
          url: "https://api.spotify.com/v1/users/jmperezperez",
          headers: {
            Authorization: "Bearer " + token,
          },
          json: true,
        };
        request.get(options, function (error, response, body) {
        });
      }
    });

    // this.updateItems();
  }

  componentDidUpdate = (prevProps, prevState) => {
    // if the instrumentalness is == 0 it makes it equal to a value between 0 and 0.35 so the same shape doesn't appear too often.
    if(this.state.loadImage === true){
      Instrumentalness = this.state.trackFeatures.instrumentalness;

      if (Instrumentalness === 0){
        Instrumentalness = Math.random() * 0.35;
      }
    }

    //checks to see if the user submits the same search again and if so, does not try reloading the search results
    if (
      this.state.searchedTextSubmitted &&
      this.state.searchedTextSubmitted !== prevState.searchedTextSubmitted
      ) {
        this.fetchSearch();
        this.formatSideBar();
        this.setState({
          
          loadImage: false
        })
      }
  };

  render() {

    return (

      <div className="main">
        {this.formatSideBar()}
        {this.formatImageContainer()}

        {/* visible states for debugging purposes */}
        {/* <div className="debugging">
          <p>this.state.searchedText: {this.state.searchedText}</p>
          <p>this.state.searchedTextSubmitted:{" "}{this.state.searchedTextSubmitted}</p>
          <p>this.state.selectedTrackId: {this.state.selectedTrackId}</p>
          <p>this.state.selectedTrackArtistId: {this.state.selectedTrackArtistId}</p>
          <p>tfAcousticness={this.state.trackFeatures.acousticness} </p>
          <p>tfDanceability={this.state.trackFeatures.danceability} </p>
          <p>tfEnergy={this.state.trackFeatures.energy} </p>
          <p>tfTempo={this.state.trackFeatures.tempo}</p>
          <p>tfInstrumentalness={this.state.trackFeatures.instrumentalness}</p>
          <p>tfValence={this.state.trackFeatures.valence}</p>
          <p>tfLoudness={this.state.trackFeatures.loudness}</p>
          <p>artistGenre={this.state.artistGenre}</p>
          <p>selectedTrackArtist={this.state.selectedTrackArtist}</p>
          <p>selectedTrackName={this.state.selectedTrackName}</p>
        </div> */}
        <div className="mobile-footer">
                <a href="https://octavcodrea.com">Octav Codrea</a>
        </div>
      </div>

    );
  }
}

export default MainContainer;
