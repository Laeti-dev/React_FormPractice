import { useState } from "react";

const BasicForm = (props) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [firstNameInputHasBeenTouch, setFirstNameInputHasBeenTouched] = useState(false);
  const firstNameInputHasError = !firstNameIsValid && firstNameInputHasBeenTouch;

  const [lastNameInput, setLastNameInput] = useState('');
  const [lastNameIsValid, setLastNameIsValid] = useState(false);
  const [lastNameInputHasBeenTouch, setLastNameInputHasBeenTouched] = useState(false);
  const lastNameInputHasError = !lastNameIsValid && lastNameInputHasBeenTouch;

  const [emailInput, setEmailInput] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailInputHasBeenTouch, setEmailInputHasBeenTouched] = useState(false);
  const emailInputHasError = !emailIsValid && emailInputHasBeenTouch;

  const firstNameInputChangeHandler = (event) => {
    setFirstNameInput(event.target.value);
    if (firstNameInput.trim() !== ''){
      setFirstNameIsValid(true)
      console.log(firstNameInput)
    };
  };

  const firstNameInputBlurHandler = (event) => {
    setFirstNameInputHasBeenTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setLastNameInput(event.target.value);
    if (lastNameInput.trim() !== ''){
      setLastNameIsValid(true)
    };
  };

  const lastNameInputBlurHandler = (event) => {
    setLastNameInputHasBeenTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEmailInput(event.target.value);
    if (emailInput.trim() !== ''){
      setEmailIsValid(true)
    };
  };

  const emailInputBlurHandler = (event) => {
    setEmailInputHasBeenTouched(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // reset
    setFirstNameInput('');
    setFirstNameIsValid(false);
    setFirstNameInputHasBeenTouched(false);

    setLastNameInput('');
    setLastNameIsValid(false);
    setLastNameInputHasBeenTouched(false);

    setEmailInput('');
    setEmailIsValid(false);
    setEmailInputHasBeenTouched(false);
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
