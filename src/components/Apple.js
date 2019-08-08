import React from "react";

export const Apple = props => {
  const { numberOfBites = 10, color = " green" } = props;
  return (
    <div>
      <h2> Apple </h2>
      <div
        style={{
          backgroundColor: color,
          textAlign: "center",
          width: 100 + numberOfBites * 10 + "px",
          height: 100 + numberOfBites * 10 + "px",
          borderRadius: "50% 50% 50% 50%",
          padding: "5%",
          margin: "20px"
        }}
      />
      <button onClick={props.bite}>Bite</button>
      <button onClick={props.wash}>Clean</button>
      <button onClick={props.rot}>Rot</button>
      <div>Liczba gryzów: {numberOfBites}</div>
    </div>
  );
};
