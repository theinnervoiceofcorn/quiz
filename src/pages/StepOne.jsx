import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppIndicator } from "../components/AppIndicator";
import { AppHeading } from "../components/AppHeading";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

export const StepOne = () => {

    // Навигация
    const navigate = useNavigate();

    const goToNextPage = () => {
      if (inputValue) {
        navigate("/step-two");
      } else {
        navigate("/step-one");
      }
    };
    
    const clickHandler = () => {
      validateInput();
      goToNextPage();
    };

  // Валидация
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handlerInput = (value) => {
    setInputValue(value);
    validateInput();
  };

  const validateInput = () => {
    if (!inputValue) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <AppIndicator currentStep={1} />
          <div className="question">
            <AppHeading
              headingText={"1. Занимательный вопрос"}
              headingType={"h2"}
            />
            <AppInput
              inputType={"text"}
              value={inputValue}
              onChange={(value) => handlerInput(value)}
              hasError={inputError}
              errorText={"Введите номер в правильном формате например"}
              inputPlaceholder={"Ваш ответ"}
            />
            <AppButton onClick={clickHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
};
