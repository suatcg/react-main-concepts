import React, { useState } from "react";

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  // const [temperature, setTemperature] = useState(props.temperature);
  const temperature = props.temperature;

  const handleChange = (e) => {
    // setTemperature(e.target.value);
    props.onTemperatureChange(e.target.value);
  };

  const scale = props.scale;

  return (
    <fieldset>
      <legend> Enter temperature in {scaleNames[scale]}</legend>
      <input value={temperature} onChange={handleChange}></input>
    </fieldset>
  );
}

export default TemperatureInput;
