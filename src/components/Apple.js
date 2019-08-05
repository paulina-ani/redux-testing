import React from "react";

export const Apple = ({ numberofBites = 10, color = " green" }) => {
  return (
    <div>
      <h2> Apple </h2>
      <div
        style={{
          backgroundColor: color,
          textAlign: "center",
          width: 100 + numberofBites * 10 + "px",
          height: 100 + numberofBites * 10 + "px",
          borderRadius: "50% 50% 50% 50%",
          padding: "5%",
          margin: "20px"
        }}
      />
    </div>
  );
};
