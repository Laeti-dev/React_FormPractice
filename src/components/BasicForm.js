import { useState } from "react";

const BasicForm = (props) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [firstNameInputHasBeenTouch, setFirstNameInputHasBeenTouched] = useState(false);
  const firstNameInputHasError = !firstNameIsValid || firstNameInputHasBeenTouch;

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

  const submitFormHandler = (event) => {
    event.preventDefault();
    // reset
    setFirstNameInput('');
    setFirstNameIsValid(false);
    setFirstNameInputHasBeenTouched(false);
  };

  const firstNameClass = firstNameInputHasError ? "form-control invalid" : "form-control";

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
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
