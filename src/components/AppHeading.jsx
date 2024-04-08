import React from "react";

export const AppHeading = ({ headingText, headingType }) => {
  const renderHeading = () => {
    switch (headingType) {
      case "h1":
        return <h1>{headingText}</h1>;
      case "h2":
        return <h2>{headingText}</h2>;
      case "h3":
        return <h3>{headingText}</h3>;
      default:
        return <h1>{headingText}</h1>;
    }
  };

  return renderHeading();
};
