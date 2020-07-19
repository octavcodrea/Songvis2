import React from "react";
import "./ImageContainer.css";

import ImageElement from "../ImageElement/ImageElement.jsx"

const ImageContainer = ({
  tfAcousticness,
  tfDanceability,
  tfEnergy,
  tfTempo,
  tfInstrumentalness,
  tfValence,
  tfLoudness,
  artistGenre,
  selectedTrackArtist,
  selectedTrackName
}) => {
  // console.log("img container, acousticness: ",tfAcousticness)
  // console.log("img container, danceability: ",tfDanceability)
  // console.log("img container, artistGenre: ",artistGenre)

  // let imgB=".../images/B1.svg";
  // let imgC=".../images/C1.svg";
  // let imgBG=".../images/BG1.svg";

  let styleBgDefault = {
    position: "relative",
    backgroundColor: "#1D1C2A",
  };

  return (
    <div className="imageContainer">
    <div className="generatedImage" style={styleBgDefault}>

      <ImageElement 
        ElementType = "A"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      <ImageElement 
        ElementType = "B"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      <ImageElement 
        ElementType = "C"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      <ImageElement 
        ElementType = "D"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      <ImageElement 
        ElementType = "E"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      <ImageElement 
        ElementType = "BG"
        tfAcousticness={tfAcousticness}
        tfDanceability={tfDanceability}
        tfEnergy={tfEnergy}
        tfTempo={tfTempo}
        tfInstrumentalness={tfInstrumentalness}
        tfValence={tfValence}
        tfLoudness={tfLoudness}
        artistGenre={artistGenre}
      />

      {/* <div className="BG">
        <img src={imgBG} alt="" />
      </div> */}
    </div>
      <div className="songTitleDisplay">
        <h3>{selectedTrackName}</h3>
        <h5>{selectedTrackArtist}</h5>
      </div>

    </div>
  );
};

export default ImageContainer;

