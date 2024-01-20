import React, { useState } from 'react';

const RangeInput = ({ min, max, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length < min || value.length > max) {
      e.target.style.backgroundColor = 'red';
    } else {
      e.target.style.backgroundColor = 'white';
    }

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div>
      <input
        {...props}
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <span>{inputValue.length}</span>
    </div>
  );
};
  const ExampleRangeInput = () => (
    <RangeInput
      min={2}
      max={10}
      placeholder="Введіть тут..."
      onChange={(e) => console.log(e.target.value)}
    />
  );
  
  export default ExampleRangeInput;