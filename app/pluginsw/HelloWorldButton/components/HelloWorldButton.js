import React from "react"

const HelloWorldButton = () => {
  const handleClick = () => {
    alert("Hello, World!")
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Click Me
    </button>
  )
}

export default HelloWorldButton
