import React from "react";
import { AppHeading } from "../components/AppHeading";
import { AppButton } from "../components/AppButton";

export const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <AppHeading
            headingText={"Спасибо за прохождение опроса!"}
            headingType={"h1"}
          />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <AppButton buttonText="Получить ссылку" id="get-link" />
        </div>
      </div>
    </div>
  );
};
