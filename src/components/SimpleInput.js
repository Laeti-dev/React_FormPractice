import { useState } from "react";

const SimpleInput = (props) => {
  // Create a state to check keystroke to use on the input
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // when user is submitting the form, set to true
    setEnteredNameTouched(true);
    // Check for input validity
    if (!nameIsValid){
      return;
    };
    // set the validity of the input
    // setNameIsValid(true);
    // reset form
    setEnteredName('');
    setEnteredNameTouched(false)

  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
