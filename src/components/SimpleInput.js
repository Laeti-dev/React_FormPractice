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



  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);


  const validRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailIsValid = enteredEmail.match(validRegEx);
  const emailIsNotEmpty = enteredEmail.trim() !== ''
  const emailInputIsInvalid = (!emailIsValid || !emailIsNotEmpty) && enteredEmailTouched;

  // let formIsValid = false;

  // // to check if all the form is valid, rerender everytime an input is changed (dependencies)
  useEffect(() => {
    if (enteredNameIsValid && emailIsValid && emailIsNotEmpty) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, emailIsValid, emailIsNotEmpty]);

  // if (nameIsValid) {
  //   formIsValid = true;
  // };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    // when user is submitting the form, set to true
    setEnteredEmailTouched(true)
    // Check for input validity
    if (!formIsValid){
      return;
    };
    // set the validity of the input
    // setNameIsValid(true);
    // reset form

    setEnteredEmail('');
    setEnteredEmailTouched(false);
    resetNameInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

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
        {emailInputIsInvalid && <p className="error-text">You should enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
