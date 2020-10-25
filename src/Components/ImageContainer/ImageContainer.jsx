import React from "react";
// import "./ImageContainer.css";
import { CSSTransition } from "react-transition-group";

import ImageElement from "../ImageElement/ImageElement.jsx";

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
  selectedTrackName,
  loadImage,
}) => {

  //Holds all the image elements.

  let styleBgDefault = {
    position: "relative",
    backgroundColor: "#1D1C2A",
  };

  // Return a generatedImage div for every type of image part.
  return (
    <div className="imageContainer">
      <div className="generatedImage" style={styleBgDefault}>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="A"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="B"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="C"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="D"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="E"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>
        <CSSTransition
          in={loadImage}
          timeout={2000}
          classNames="image-element"
          // unmountOnExit
          appear
          enter={true}
        >
          <ImageElement
            ElementType="BG"
            tfAcousticness={tfAcousticness}
            tfDanceability={tfDanceability}
            tfEnergy={tfEnergy}
            tfTempo={tfTempo}
            tfInstrumentalness={tfInstrumentalness}
            tfValence={tfValence}
            tfLoudness={tfLoudness}
            artistGenre={artistGenre}
          />
        </CSSTransition>

      </div>
      <div className="songTitleDisplay">
        <h3>{selectedTrackName}</h3>
        <h5>{selectedTrackArtist}</h5>
      </div>
    </div>
  );
};

export default ImageContainer;
