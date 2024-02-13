import React from "react";
import { AppIndicator } from "../components/AppIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppVAI } from "../components/AppVAI";
import { AppLinkBtn } from "../components/AppLinkBtn";

const VariantData = [
  {
    id: "variant-1",
    text: "Ваш ответ",
  },
  {
    id: "variant-2",
    text: "Ваш ответ",
  },
  {
    id: "variant-3",
    text: "Ваш ответ",
  },
  {
    id: "variant-4",
    text: "Ваш ответ",
  },
];

export const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <AppIndicator currentStep={2}/>
          <div className="question">
            <AppHeading
              headingText={"2. Занимательный вопрос"}
              headingType={"h2"}
            />
            <ul className="variants">
              {VariantData &&
                VariantData.map((elem) => (
                  <AppVAI id={elem.id} variantText={elem.text} />
                ))}
            </ul>
            <AppLinkBtn path="/step-three"/>
          </div>
        </div>
      </div>
    </div>
  );
};
