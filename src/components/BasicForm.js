import { useState, useEffect } from "react";

import useInput from "../hooks/use-input";
const validRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const isEmail =  value => value.match(validRegEx);

const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    valueIsValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler : firstNameInputChangeHandler,
    valueBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty)
  // const [firstNameInput, setFirstNameInput] = useState('');
  // const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  // const [firstNameInputHasBeenTouch, setFirstNameInputHasBeenTouched] = useState(false);
  // const firstNameInputHasError = !firstNameIsValid && firstNameInputHasBeenTouch;

  const {
    value: lastNameInput,
    valueIsValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler : lastNameInputChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty)
  // const [lastNameInput, setLastNameInput] = useState('');
  // const [lastNameIsValid, setLastNameIsValid] = useState(false);
  // const [lastNameInputHasBeenTouch, setLastNameInputHasBeenTouched] = useState(false);
  // const lastNameInputHasError = !lastNameIsValid && lastNameInputHasBeenTouch;

  const {
    value: emailInput,
    valueIsValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler : emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(isNotEmpty && isEmail)

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  };


  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid){
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();

  };



  const firstNameClass = firstNameInputHasError ? "form-control invalid" : "form-control";
  const lastNameClass = lastNameInputHasError ? "form-control invalid" : "form-control";
  const emailClass = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameInput}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            />
        {firstNameInputHasError && <p className="error-text">First Name can't be empty</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameInput}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && <p className="error-text">Last Name can't be empty</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Email should be valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
