import React from "react";
import { AppIndicator } from "../components/AppIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppVAI } from "../components/AppVAI";
import { AppLinkBtn } from "../components/AppLinkBtn";

export const StepFour = () => {
  const VariantData = [
    {
      id: "variant-1",
      text: "1",
    },
    {
      id: "variant-2",
      text: "2",
    },
    {
      id: "variant-3",
      text: "3",
    },
    {
      id: "variant-4",
      text: "4",
    },
    {
      id: "variant-5",
      text: "5",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <AppIndicator currentStep={4} />
          <div className="question">
            <AppHeading
              headingText={"4. Занимательный вопрос"}
              headingType={"h2"}
            />
            <ul className="level-variants">
              {VariantData &&
                VariantData.map((elem) => (
                  <AppVAI id={elem.id} text={elem.text}/>
                ))}
            </ul>
            <AppLinkBtn path="/thanks" />
          </div>
        </div>
      </div>
    </div>
  );
};
