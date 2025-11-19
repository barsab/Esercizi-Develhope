import {useEffect, useRef} from 'react';

function FocusableInput() {
  const inputElement = useRef();

  useEffect(() => {
      inputElement.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputElement} />
    </>
  )
}

export default FocusableInput;