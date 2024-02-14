import React from "react";
import { AppIndicator } from "../components/AppIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppVIAI } from "../components/AppVIAI";
import { AppLinkBtn } from "../components/AppLinkBtn";

export const StepThree = () => {
  const VariantData = [
    {
      id: "variant-1",
      imgSrc: "./img/laugh.png",
      altText: "laugh",
      text: "Ваш ответ 1",
    },
    {
      id: "variant-2",
      imgSrc: "./img/hearts.png",
      altText: "hearts",
      text: "Ваш ответ 2",
    },
    {
      id: "variant-3",
      imgSrc: "./img/smirk.png",
      altText: "smirk",
      text: "Ваш ответ 3",
    },
    {
      id: "variant-4",
      imgSrc: "./img/fright.png",
      altText: "fright",
      text: "Ваш ответ 4",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <AppIndicator currentStep={3} />
          <div className="question">
            <AppHeading
              headingText={"3. Занимательный вопрос"}
              headingType={"h2"}
            />
            <ul className="emoji-variants">
              {VariantData &&
                VariantData.map((elem) => (
                  <AppVIAI
                    altText={elem.altText}
                    id={elem.id}
                    imgSrc={elem.imgSrc}
                    text={elem.text}
                  />
                ))}
            </ul>
            <AppLinkBtn path="/step-four" />
          </div>
        </div>
      </div>
    </div>
  );
};
