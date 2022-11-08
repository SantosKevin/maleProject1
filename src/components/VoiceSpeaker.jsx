import React, { useState } from "react";
import "./styles.css";
import Test from "./Test";
import TestVoice from "./TestVoice";
import img1 from "../images/image-11.png";

const VoiceSpeaker = () => {
  const [startOn, setStartOn] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const [speakOn, setSpeakOn] = useState(false);
  const startVoice = () => {
    setStartOn(true);
    setVoiceOn(true);
    setSpeakOn(false);
  };
  const startSpeak = () => {
    setStartOn(true);
    setSpeakOn(true);
    setVoiceOn(false);
  };
  const goHome = () => {
    setStartOn(false);
    setSpeakOn(false);
    setVoiceOn(false);
  };

  return (
    <div className="container">
      {!startOn && (
        <>
          <h1>LA VOZ </h1>
          <img src={img1} width={"250px"}></img>
          <button className="button" onClick={startVoice}>
            PRESIONA AQUI PARA COMENZAR
          </button>
        </>
      )}
      {voiceOn && (
        <>
          <button className="linkButton1" onClick={goHome}>
            Volver al INICIO
          </button>
          <br />
          <div className="containerVoice">
            <Test />
            <button className="linkButton" onClick={startSpeak}>
              Cambiar a modo HABLAR{" "}
            </button>
          </div>
        </>
      )}
      {speakOn && (
        <>
          <button className="linkButton1" onClick={goHome}>
            Volver al INICIO
          </button>
          <br />
          <div className="containerVoice">
            <TestVoice />
            <button className="linkButton" onClick={startVoice}>
              Cambiar a modo ESCUCHAR{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VoiceSpeaker;
