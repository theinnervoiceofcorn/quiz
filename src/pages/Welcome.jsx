import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeading } from "../components/AppHeading";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

export const Welcome = () => {
  
  // Навигация
  const navigate = useNavigate();

  const goToNextPage = () => {
    if (nameValue && phoneValue) {
      navigate("/step-one");
    } else {
      navigate("/");
    }
  };

  const clickHandler = () => {
    validateName();
    validatePhone();
    goToNextPage();
  };

  // Валидация

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handlerInputName = (value) => {
    setNameValue(value);
    validateName();
  };
  const handlerInputPhone = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  //

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeading
            headingType={"h1"}
            headingText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppInput
              value={nameValue}
              onChange={(value) => handlerInputName(value)}
              hasError={nameError}
              errorText={"Введите номер в правильном формате например"}
              id={"username"}
              inputPlaceholder={"Ваш ответ"}
              inputType={"text"}
              labelText={"Ваше имя"}
            />
            <AppInput
              value={phoneValue}
              onChange={(value) => handlerInputPhone(value)}
              hasError={phoneError}
              errorText={"Введите номер в правильном формате"}
              id={"phone"}
              inputPlaceholder={"+998 9- --- -- -- "}
              inputType={"tel"}
              labelText={"Ваш номер"}
            />
            <AppButton onClick={clickHandler} />
          </form>
        </div>
      </div>
    </div>
  );
};
