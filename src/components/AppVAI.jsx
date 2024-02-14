import React from "react";

export const AppVAI = ({ id, text }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id} />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};
