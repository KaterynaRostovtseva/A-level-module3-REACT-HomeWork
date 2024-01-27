import React, { useState } from "react";

const Phonebook = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handlePhoneNumberChange = (index, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <div>
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
          />
          <button onClick={() => removePhoneNumber(index)}>Видалити</button>
        </div>
      ))}
      <button onClick={addPhoneNumber}>Додати номер телефону</button>
    </div>
  );
};

export default Phonebook;
