import { useState } from "react";

const BasicForm = (props) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);

  const firstNameInputChangeHandler = (event) => {
    setFirstNameInput(event.target.value);
    if (firstNameInput.trim() !== ''){
      setFirstNameIsValid(true)
      console.log(firstNameInput)
    };
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // reset
    setFirstNameInput('')
    setFirstNameIsValid(false)
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameInput}
            onChange={firstNameInputChangeHandler}
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
