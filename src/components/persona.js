import React from 'react';

function Persona({persona, setPersona}) {
  const handleInputChange = (event) => {
    setPersona(event.target.value);
  };

  return (
    <div className="flex h-full">
      <input
        type="text"
        value={persona}
        onChange={handleInputChange}
        className="border rounded p-2 flex-grow"
        placeholder="Specify your persona here. This will determine which data is shown."
      />
    </div>
  );
}

export default Persona;