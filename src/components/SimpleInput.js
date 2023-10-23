import { useState } from "react";

const SimpleInput = (props) => {
  // Create a state to check keystroke to use on the input
  const [enteredName, setEnteredName] = useState('');
  // create a state for the validation
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    // Check for input validity
    if (nameIsValid){
      return;
    };

    // reset form
    setEnteredName('');

  };

  const nameInputClasses = nameIsValid ? "form-control" : "form-control invalid";

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
        {!nameIsValid && <p className="error-text">You should enter a Name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
