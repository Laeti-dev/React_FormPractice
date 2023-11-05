import { useState } from "react";

const SimpleInput = (props) => {
  // Create a state to check keystroke to use on the input
  const [enteredName, setEnteredName] = useState('');
  // create a state for the validation
  const [nameIsValid, setNameIsValid] = useState(false);
  //
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // when user is submitting the form, set to true
    setEnteredNameTouched(true);
    // Check for input validity
    if (enteredName.trim() === ''){
      setNameIsValid(false)
      return;
    };
    // set the validity of the inpu
    // setNameIsValid(true);
    // reset form
    // setEnteredName('');

  };
  const nameInputIsInvalid = !nameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
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
