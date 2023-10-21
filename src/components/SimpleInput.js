import { useState } from "react";

const SimpleInput = (props) => {
  // Create a state to check keystroke to use on the input
  const [enteredName, setEnteredName] = useState('')

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);

    // reset form
    setEnteredName('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          // bind the states to input
          value={enteredName}
          />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
