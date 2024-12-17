import { useState, useEffect } from "react";
import Color from "../components/Color";
import { Button } from "./ui/button";

const MyApp = () => {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
  };

  useEffect(() => {
    const colorNum = 20;
    const initialColors = Array.from({ length: colorNum }, () => ({
      hexColor: generateColor(),
    }));
    setColors(initialColors);
  }, []);
  const addMoreColors = () => {
    const newColors = Array.from({ length: 10 }, () => ({
      hexColor: generateColor(),
    }));
    setColors((prevColors) => [...prevColors, ...newColors]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap gap-4">
          {colors.map((color, index) => {
            return (
              <div key={index} className="flex mx-auto">
                <Color className="" hexColor={color.hexColor} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={addMoreColors}>Generate More Colors</Button>
        </div>
      </div>
    </>
  );
};

export default MyApp;
