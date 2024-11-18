import React from "react"

const HelloWorldButton = () => {
  const handleClick = () => {
    alert("Hello, World!")
  }

  return (
    <button
      onClick={handleClick}
      style={{
        // position: "absolute",
        padding: "10px 20px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "116px",
        // top: "15rem",
      }}
    >
      Click Me
    </button>
  )
}

export default HelloWorldButton
