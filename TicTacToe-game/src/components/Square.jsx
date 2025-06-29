import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        width: "60px",
        height: "60px",
        border: "2px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        margin: "5px",
        backgroundColor: "#f9f9f9",
      }}
      className="square"
    >
      <h5 style={{ color: "black" }}>{props.value}</h5>
    </div>
  );
};

export default Square;
