import React, { useState, useEffect } from "react";

function Tick() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalTime = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalTime);
  }, []);
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>it is {date}.</h2>
    </div>
  );
}

export default Tick;
