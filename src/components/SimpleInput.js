import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  // Create a state to check keystroke to use on the input
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = enteredName.trim() !== '';

  const validRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailIsValid = enteredEmail.match(validRegEx);
  const emailIsNotEmpty = enteredEmail.trim() !== ''

  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;
  const emailInputIsInvalid = (!emailIsValid || !emailIsNotEmpty) && enteredEmailTouched;
  // let formIsValid = false;

  // // to check if all the form is valid, rerender everytime an input is changed (dependencies)
  useEffect(() => {
    if (nameIsValid && emailIsValid && emailIsNotEmpty) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, emailIsValid, emailIsNotEmpty]);

  // if (nameIsValid) {
  //   formIsValid = true;
  // };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    // when user is submitting the form, set to true
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true)
    // Check for input validity
    if (!formIsValid){
      return;
    };
    // set the validity of the input
    // setNameIsValid(true);
    // reset form
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);

  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
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
        {nameInputIsInvalid && <p className="error-text">You should enter a Name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          // bind the states to input
          value={enteredEmail}
          />
        {emailInputIsInvalid && <p className="error-text">You should enter an email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
