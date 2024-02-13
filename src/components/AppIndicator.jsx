import React from "react";

export const AppIndicator = ({ currentStep }) => {
  const indicatorStep = [1, 2, 3, 4];
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {indicatorStep.map((v, i) => (
          <div
            key={v}
            className={`indicator__unit indicator__unit-1 ${
              i < currentStep && "_active"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
