import React from "react";

export const AppButton = ({buttonText="Далее", isDisabled, onClick}) =>{
    return(
        <button disabled = {isDisabled} onClick={onClick} type="button" id="next-btn">
        {buttonText}
      </button>
    );
};