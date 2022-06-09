// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  let [bigImage, setBigImage] = useState(imagesArr[0].img);

  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = ({ img }) => {
    setBigImage((bigImage = img));
    console.log("clicked");
  };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE
  //EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map(({ img }, idx) => {
    return (
      <img
        src={img}
        alt={img}
        className="thumb"
        key={idx}
        onClick={() => {
          handleClick({ img });
        }}
      />
    );
  });
  //console.log({images})
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
