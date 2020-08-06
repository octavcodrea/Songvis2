import React from "react";
import "./ImageElement.css";

import {
    A1, A2, A3, A4, A5, A6, A7, A8, A9, 
    B1, B2, B3, B4, B5, B6, B7, 
    C1, C2 ,C3, C4, C5, C6, C7, 
    D1, D2, D3, D4, D5, D6, D7,
    E1, E2, E3, E4, E5, E6, E7,
    BG1, BG2, BG3, BG4, BG5, BG6, BG7
} from "./SVGElements.jsx";

let rotateCounter = 0;
let styleA = {
    fill: "url(#gradientA)",
};

let styleB = {
    // width: "700px",
    // height: "700px",
    // position: "absolute",
    fill: "url(#gradientB)",
};

let styleC = {
    fill: "url(#gradientC)",
};

let styleD = {
    fill: "url(#gradientD)",
};

let styleE = {
    fill: "url(#gradientE)",
    transform: `rotate(${rotateCounter}deg)`
};

let styleBG = {
    fill: "url(#gradientBG)"
}

//initial setup for shape colors
let stopA1, stopA2, stopB1, stopB2, stopC1, stopC2, stopD1, stopD2, stopE1, stopE2, stopBG1, stopBG2;
 stopA1 = stopB1 = stopC1 = stopD1 = stopE1 = stopBG1 = "#11121a";
 stopA2 = stopB2 = stopC2 = stopD2 = stopE2 = stopBG2 = "#252433";

//sets up the colors for gradients depending on the value of the song features
const formatColors = (tfValence, tfAcousticness, tfDanceability, tfEnergy, tfLoudness, tfTempo) => {
    if (tfValence < 0.11){
        stopA1 = "#1A0F46";
        stopA2 = "#A2ADE1";
    }else if(tfValence >= 0.11 && tfValence < 0.22){
        stopA1 = "#3C2A85";
        stopA2 = "#CFD7FF";
    }else if(tfValence >= 0.22 && tfValence < 0.33){
        stopA1 = "#3425B2";
        stopA2 = "#A8BCFF";
    }else if(tfValence >= 0.33 && tfValence < 0.44){
        stopA1 = "#1400C5";
        stopA2 = "#8FE0FF";
    }else if(tfValence >= 0.44 && tfValence < 0.55){
        stopA1 = "#1776BF";
        stopA2 = "#47FFE6";
    }else if(tfValence >= 0.55 && tfValence < 0.66){
        stopA1 = "#0EB5E1";
        stopA2 = "#FFF82E";
    }else if(tfValence >= 0.66 && tfValence < 0.77){
        stopA1 = "#E138A8";
        stopA2 = "#FFF947";
    }else if(tfValence >= 0.77 && tfValence < 0.88){
        stopA1 = "#E62F00";
        stopA2 = "#FFE680";
    }else if(tfValence >= 0.88){
        stopA1 = "#E66400";
        stopA2 = "#FFFF80";
    }
    
    if (tfAcousticness < 0.11){
        stopB1 = "#7C4AF2";
        stopB2 = "#8FFFF4";
    }else if(tfAcousticness >= 0.11 && tfAcousticness < 0.22){
        stopB1 = "#3622E1";
        stopB2 = "#ACDEFF";
    }else if(tfAcousticness >= 0.22 && tfAcousticness < 0.33){
        stopB1 = "#533EE4";
        stopB2 = "#EDD2FF";
    }else if(tfAcousticness >= 0.33 && tfAcousticness < 0.44){
        stopB1 = "#8551D4";
        stopB2 = "#FFC58B";
    }else if(tfAcousticness >= 0.44 && tfAcousticness < 0.55){
        stopB1 = "#CC4A8B";
        stopB2 = "#FFC978";
    }else if(tfAcousticness >= 0.55 && tfAcousticness < 0.66){
        stopB1 = "#FF8C58";
        stopB2 = "#FFDC2E";
    }else if(tfAcousticness >= 0.66 && tfAcousticness < 0.77){
        stopB1 = "#E6A100";
        stopB2 = "#FFF787";
    }else if(tfAcousticness >= 0.77 && tfAcousticness < 0.88){
        stopB1 = "#ECB637";
        stopB2 = "#FFFBC1";
    }else if(tfAcousticness >= 0.88){
        stopB1 = "#C79A6B";
        stopB2 = "#FFF8CE";
    }
    
    if (tfDanceability < 0.3){
        stopBG1 = "#0C175D";
        stopBG2 = "#76789E";
    }else if(tfDanceability >= 0.3 && tfDanceability < 0.4){
        stopBG1 = "#111175";
        stopBG2 = "#4B89B4";
    }else if(tfDanceability >= 0.4 && tfDanceability < 0.5){
        stopBG1 = "#0B2A94";
        stopBG2 = "#308BAE";
    }else if(tfDanceability >= 0.5 && tfDanceability < 0.6){
        stopBG1 = "#002C78";
        stopBG2 = "#3483C8";
    }else if(tfDanceability >= 0.6 && tfDanceability < 0.65){
        stopBG1 = "#1C196B";
        stopBG2 = "#C76033";
    }else if(tfDanceability >= 0.65 && tfDanceability < 0.7){
        stopBG1 = "#25074B";
        stopBG2 = "#CE5021";
    }else if(tfDanceability >= 0.7 && tfDanceability < 0.75){
        stopBG1 = "#4E0829";
        stopBG2 = "#C95E2E";
    }else if(tfDanceability >= 0.75 && tfDanceability < 0.8){
        stopBG1 = "#430019";
        stopBG2 = "#C53F0D";
    }else if(tfDanceability >= 0.8){
        stopBG1 = "#440061";
        stopBG2 = "#B53C8D";
    }

    if (tfEnergy < 0.11){
        stopD1 = "#2D2277";
        stopD2 = "#B3A6DF";
    }else if(tfEnergy >= 0.11 && tfEnergy < 0.22){
        stopD1 = "#222E77";
        stopD2 = "#7596F2";
    }else if(tfEnergy >= 0.22 && tfEnergy < 0.33){
        stopD1 = "#2C1EA7";
        stopD2 = "#99CEF2";
    }else if(tfEnergy >= 0.33 && tfEnergy < 0.44){
        stopD1 = "#193CB1";
        stopD2 = "#7FD4CB";
    }else if(tfEnergy >= 0.44 && tfEnergy < 0.55){
        stopD1 = "#442B98";
        stopD2 = "#FF9C9C";
    }else if(tfEnergy >= 0.55 && tfEnergy < 0.66){
        stopD1 = "#94205A";
        stopD2 = "#F3DE98";
    }else if(tfEnergy >= 0.66 && tfEnergy < 0.77){
        stopD1 = "#B51F29";
        stopD2 = "#F3DE98";
    }else if(tfEnergy >= 0.77 && tfEnergy < 0.88){
        stopD1 = "#CC551F";
        stopD2 = "#F1E5AA";
    }else if(tfEnergy >= 0.88){
        stopD1 = "#CC971C";
        stopD2 = "#FFFCCF";
    }

    if (tfLoudness < -25){
        stopC1 = "#28184E";
        stopC2 = "#ADAFB5";
    }else if(tfLoudness >= -25 && tfLoudness < -15){
        stopC1 = "#202A6A";
        stopC2 = "#AEBBE1";
    }else if(tfLoudness >= -15 && tfLoudness < -10){
        stopC1 = "#49409C";
        stopC2 = "#658CE6";
    }else if(tfLoudness >= -10 && tfLoudness < -8){
        stopC1 = "#4A77F2";
        stopC2 = "#DB7FAD";
    }else if(tfLoudness >= -8 && tfLoudness < -7){
        stopC1 = "#6A4AF2";
        stopC2 = "#EE7582";
    }else if(tfLoudness >= -7 && tfLoudness < -6){
        stopC1 = "#9A2567";
        stopC2 = "#FFAEAE";
    }else if(tfLoudness >= -6 && tfLoudness < -5){
        stopC1 = "#CE2866";
        stopC2 = "#FFACAC";
    }else if(tfLoudness >= -5 && tfLoudness < -4){
        stopC1 = "#CE2828";
        stopC2 = "#FFCDAC";
    }else if(tfLoudness >= -4){
        stopC1 = "#D1430E";
        stopC2 = "#FBDF75";
    }

    if (tfTempo < 50){
        stopE1 = "#49409C";
        stopE2 = "#658CE6";
    }else if(tfTempo >= 50 && tfTempo < 80){
        stopE1 = "#2C1EA7";
        stopE2 = "#99CEF2";
    }else if(tfTempo >= 80 && tfTempo < 110){
        stopE1 = "#193CB1";
        stopE2 = "#7FD4CB";
    }else if(tfTempo >= 110 && tfTempo < 140){
        stopE1 = "#442B98";
        stopE2 = "#FF9C9C";
    }else if(tfTempo >= 140 && tfTempo < 170){
        stopE1 = "#B51F29";
        stopE2 = "#F3DE98";
    }else if(tfTempo >= 170 && tfTempo < 200){
        stopE1 = "#CC551F";
        stopE2 = "#FFE875";
    }else if(tfTempo >= 200){
        stopE1 = "#FF8C58";
        stopE2 = "#FFDC2E";
    }
}

const elementA = (functionX) => {
    return (
        <svg className="A" style={styleA}>

            <linearGradient id="gradientA" x2="1" y2="1">
              <stop offset="0%" stopColor={stopA1} />
              <stop offset="100%" stopColor={stopA2} />
            </linearGradient>

            {functionX()};
        </svg>
    )
}

const elementB = (functionX) => {
    return (
        <svg className="B" style={styleB}>

            <linearGradient id="gradientB" x2="1" y2="1">
              <stop offset="0%" stopColor={stopB1} />
              <stop offset="100%" stopColor={stopB2} />
            </linearGradient>
            
            {functionX()};
        </svg>
    )
}

const elementC = (functionX) => {
    return (
        <svg className="C" style={styleC}>

            <linearGradient id="gradientC" x2="1" y2="1">
              <stop offset="0%" stopColor={stopC1} />
              <stop offset="100%" stopColor={stopC2} />
            </linearGradient>

            {functionX()};
        </svg>
    )
}

const elementD = (functionX) => {
    return (
        <svg className="D" style={styleD}>
            <linearGradient id="gradientD" x2="1" y2="1">
              <stop offset="0%" stopColor={stopD1} />
              <stop offset="100%" stopColor={stopD2} />
            </linearGradient>

            {functionX()};
        </svg>
    )
}

// const elementEpiece = (functionX, rotation) => {
//     return(
//         <svg className="E" style={styleE}  >

//             <linearGradient id="gradientE" x2="1" y2="1">
//               <stop offset="0%" stopColor={stopE1} />
//               <stop offset="100%" stopColor={stopE2} />
//             </linearGradient>

//             {functionX()};
//         </svg>
//     )
// }

const elementE = (functionX, tfTempo) => {
    // let counter = Math.floor(tfTempo);
    // counter = Math.floor(counter / 50);
    // console.log("counter is: ", counter);

    // let elementEArray = [];

    // for (let i = 0; i< counter; i++){
    //     rotateCounter = i * 90;
    //     elementEArray.push(rotateCounter);
    // }

    // const listItems = elementEArray.map((number) =>
    //     <li>
    //         <svg className="E" style={styleE}>
    //             {elementEpiece(functionX, number)};
    //         </svg>
    //     </li>
    // );

    // return (
    //     <ul>{listItems}</ul>
    // )

    return(
        <svg className="E" style={styleE}  >

            <linearGradient id="gradientE" x2="1" y2="1">
              <stop offset="0%" stopColor={stopE1} />
              <stop offset="100%" stopColor={stopE2} />
            </linearGradient>

            {functionX()};
        </svg>
    )
}

const elementBG = (functionX) => {
    return (
        <svg className="BG" style={styleBG}>
            <linearGradient id="gradientBG" x2="1" y2="1">
              <stop offset="0%" stopColor={stopBG1} />
              <stop offset="100%" stopColor={stopBG2} />
            </linearGradient>

            {functionX()};
        </svg>
    )
}

const ImageElement = ({
    ElementType,
  tfAcousticness,
  tfDanceability,
  tfEnergy,
  tfTempo,
  tfInstrumentalness,
  tfValence,
  tfLoudness,
  artistGenre,
}) => {
    formatColors(tfValence, tfAcousticness, tfDanceability, tfEnergy, tfLoudness, tfTempo);

    switch(ElementType){
        default:
            return <p></p>;
            // break;

        case "A":{
            if(tfEnergy < 0.11){
                return(
                    elementA(A1)
                ); 
            }else if(tfEnergy >= 0.11 && tfEnergy < 0.22){
                return(
                    elementA(A2)
                ); 
            }else if(tfEnergy >= 0.22 && tfEnergy < 0.33){
                return(
                    elementA(A3)
                ); 
            }else if(tfEnergy >= 0.33 && tfEnergy < 0.44){
                //console.log("cat");
                return(
                    elementA(A4)
                ); 
            }else if(tfEnergy >= 0.44 && tfEnergy < 0.55){
                return(
                    elementA(A5)
                );
            }else if(tfEnergy >= 0.55 && tfEnergy < 0.66){
                return(
                    elementA(A6)
                ); 
            }else if(tfEnergy >= 0.66 && tfEnergy < 0.77){
                return(
                    elementA(A7)
                ); 
            }else if(tfEnergy >= 0.77 && tfEnergy < 0.88){
                return(
                    elementA(A8)
                ); 
            }else if(tfEnergy >= 0.88){
                return(
                    elementA(A9)
                ); 
            }else{
                return(
                    elementA(A5)
                ); 
            }
            // break;
        }
        
        case "B":{
            if(tfDanceability < 0.15){
                return(
                    elementB(B1)
                ); 
            }else if(tfDanceability >= 0.15 && tfDanceability < 0.3){
                return(
                    elementB(B2)
                    
                ); 
            }else if(tfDanceability >= 0.3 && tfDanceability < 0.43){
                return(
                    elementB(B3)
                ); 
            }else if(tfDanceability >= 0.43 && tfDanceability < 0.56){
                return(
                    elementB(B4)
                ); 
            }else if(tfDanceability >= 0.56 && tfDanceability < 0.7){
                return(
                    elementB(B5)
                ); 
            }else if(tfDanceability >= 0.7 && tfDanceability < 0.85){
                return(
                    elementB(B6)
                );
            }else if(tfDanceability >= 0.85){
                return(
                    elementB(B7)

                ); 
            }else{
                return(
                    elementB(B4)

                ); 
            }
            // break;
        }

        case "C":{

            if(tfInstrumentalness < 0.15){
                return(
                    elementC(C1)
                ); 
            }else if(tfInstrumentalness >= 0.15 && tfInstrumentalness < 0.3){
                return(
                    elementC(C2)
                ); 
            }else if(tfInstrumentalness >= 0.3 && tfInstrumentalness < 0.43){
                return(
                    elementC(C3)
                ); 
            }else if(tfInstrumentalness >= 0.43 && tfInstrumentalness < 0.56){
                return(
                    elementC(C4)
                ); 
            }else if(tfInstrumentalness >= 0.56 && tfInstrumentalness < 0.7){
                return(
                    elementC(C5)
                );
            }else if(tfInstrumentalness >= 0.7 && tfInstrumentalness < 0.85){
                return(
                    elementC(C6)
                ); 
            }else if(tfInstrumentalness >= 0.85){
                return(
                    elementC(C7)
                ); 
            }else{
                return(
                    elementC(C4)
                ); 
            }
            // break;
        }

        case "D":{
            if(tfValence < 0.15){
                return(
                    elementD(D1)
                ); 
            }else if(tfValence >= 0.15 && tfValence < 0.3){
                return(
                    elementD(D2)
                ); 
            }else if(tfValence >= 0.3 && tfValence < 0.43){
                return(
                    elementD(D3)
                ); 
            }else if(tfValence >= 0.43 && tfValence < 0.56){
                return(
                    elementD(D4)
                ); 
            }else if(tfValence >= 0.56 && tfValence < 0.7){
                return(
                    elementD(D5)
                ); 
            }else if(tfValence >= 0.7 && tfValence < 0.85){
                return(
                    elementD(D6)
                ); 
            }else if(tfValence >= 0.85){
                return(
                    elementD(D7)
                ); 
            }else{
                return(
                    elementD(D4)
                ); 
            }
            // break;
        }

        case "E":{
            if(tfTempo < 60){
                return(
                    elementE(E1, tfTempo)
                ); 
            }else if(tfTempo >= 60 && tfTempo < 75){
                return(
                    elementE(E2, tfTempo)
                ); 
            }else if(tfTempo >= 75 && tfTempo < 100){
                return(
                    elementE(E3, tfTempo)
                ); 
            }else if(tfTempo >= 100 && tfTempo < 125){
                return(
                    elementE(E4, tfTempo)
                ); 
            }else if(tfTempo >= 125 && tfTempo <= 150){
                return(
                    elementE(E5, tfTempo)
                ); 
            }else if(tfTempo >= 150 && tfTempo <= 175){
                return(
                    elementE(E6, tfTempo)
                ); 
            }else if(tfTempo >= 175){
                return(
                    elementE(E7, tfTempo)
                ); 
            }else{
                return(
                    elementE(E4, tfTempo)
                ); 
            }
            // break;
        }

        case "BG":{
            if(tfDanceability < 0.15){
                return(

                    elementBG(BG1)
                ); 
            }else if(tfDanceability >= 0.15 && tfDanceability < 0.3){
                return(

                    elementBG(BG2)
                    
                ); 
            }else if(tfDanceability >= 0.3 && tfDanceability < 0.43){
                return(

                    elementBG(BG3)
                ); 
            }else if(tfDanceability >= 0.43 && tfDanceability < 0.56){
                return(

                    elementBG(BG4)
                ); 
            }else if(tfDanceability >= 0.56 && tfDanceability < 0.7){
                return(

                    elementBG(BG5)
                ); 
            }else if(tfDanceability >= 0.7 && tfDanceability < 0.85){
                return(

                    elementBG(BG6)
                ); 
            }else if(tfDanceability >= 0.85){
                return(

                    elementBG(BG7)
                ); 
            }else{
                return(

                    elementBG(BG4)
                ); 
            }
            // break;
        }
    }

}

export default ImageElement;