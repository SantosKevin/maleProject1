import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./styles.css";
import img1 from "../images/image-14.png";

const Test = () => {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  return (
    <div className="container1">
      <div>
        <h3>AQUI PUEDES ESCRIBIR Y ESCUCHAR</h3>
        <img src={img1}></img>
      </div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="textArea"
        placeholder="Escribe tu texto aquí..."
      />
      <button className="buttonSpeak" onClick={() => speak({ text: value })}>
        REPRODUCIR
      </button>
    </div>
  );
};

export default Test;
