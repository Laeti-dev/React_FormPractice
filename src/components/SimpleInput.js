import { useState, useEffect } from "react";

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler : nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const validRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler : emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.match(validRegEx))

  const [formIsValid, setFormIsValid] = useState(false);

  // // to check if all the form is valid, rerender everytime an input is changed (dependencies)
  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);


  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid){
      return;
    };
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // bind the states to input
          value={enteredName}
          />
        {nameInputHasError && <p className="error-text">You should enter a Name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          // bind the states to input
          value={enteredEmail}
          />
        {emailInputHasError && <p className="error-text">You should enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
