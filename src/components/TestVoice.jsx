import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "./styles.css";
import img1 from "../images/image-13.png";

const TestVoice = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    // <div className="container2">
    //   <h3>HABLAR</h3>
    //   <textarea
    //     value={value}
    //     className="textArea"
    //     placeholder="Aquí se traducirá lo que hables..."
    //     onChange={(event) => setValue(event.target.value)}
    //   />
    //   <button onMouseDown={listen} onMouseUp={stop} className="buttonSpeak">
    //     PRESIONAR 🎤
    //   </button>
    //   {listening && <div>Go ahead I'm listening</div>}
    // </div>
    <div className="container1">
      <div style={{width: "100%"}}>
        <h3>AQUI PUEDES HABLAR Y LEER</h3>
        <img src={img1}></img>
      </div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="textArea"
        placeholder="Aquí se traducirá lo que hables..."
      />
      <button className="buttonSpeak" onMouseDown={listen} onMouseUp={stop}>
        Mantén Presionado y Habla
      </button>
      <p className="pCustom"> {listening && "¡Estoy escuchando! ¡Habla!"}</p>
    </div>
  );
};

export default TestVoice;
