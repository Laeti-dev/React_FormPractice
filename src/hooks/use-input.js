import { useReducer } from "react";

const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (prevState, action) => {
    if (action.type === 'INPUT'){
      return { value: action.value, isTouched: prevState.isTouched };
    }
    if (action.type === 'BLUR'){
      return {isTouched: true}
    }
    if (action.type === 'RESET'){
      return { value: '', isTouched: false};
    };
    return initialInputState;
  };

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {});
  // Create a state to check keystroke to use on the input
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  };

  const valueBlurHandler = event => {
    dispatch({type: 'BLUR'});
  };

  const reset = () => {
    dispatch({type: 'RESET'});
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };

};

export default useInput;
