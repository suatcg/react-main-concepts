import React, { useRef } from "react";

function NameFormUnControlled(props) {
  const input = useRef();

  function handleSubmit(event) {
    alert("A name was submitted " + input.current.value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameFormUnControlled;
