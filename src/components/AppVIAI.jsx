import React from "react";

export const AppVIAI = ({ id, imgSrc, altText, text }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id} />
      <label htmlFor={id}>
        <img src={imgSrc} alt={altText} />
        <p>{text}</p>
      </label>
    </li>
  );
};