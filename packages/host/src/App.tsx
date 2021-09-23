import { useState, useEffect } from "react";
import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';

const App = () => {
  const [currenColor, setCurrenColor] = useState("");

  useEffect(() => {
    setCurrenColor(window.localStorage.getItem('color') || "#e66465");
  }, []);

  useEffect(() => {
    window.localStorage.setItem('color', currenColor);
  }, [currenColor]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrenColor(e.target.value)
  };

  return (
    <>
      <ColorPicker
        value={currenColor}
        onChange={handleColorChange}
      />
      <ChatBotIFrame 
        color={currenColor}
      />
    </>
  );
}

export default App;
