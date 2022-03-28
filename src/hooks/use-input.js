import { useState } from 'react';

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredValue.trim() !== '';
  const hasError = !valueIsValid && isTouched;
};

export default useInput;