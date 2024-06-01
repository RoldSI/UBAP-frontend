import React, { useState } from 'react';
import Summary from "./components/summary";
import Persona from "./components/persona";
import Content from "./content";

function App() {
  const [persona, setPersona] = useState('');

  return (
    <div className="h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-8 grid-rows-8 gap-4 h-full">
        <div className="col-span-6 row-span-7">
          <Content/>
        </div>
        <div className="bg-white rounded-lg shadow p-4 col-span-2 row-span-8">
          <Summary/>
        </div>
        <div className="bg-white rounded-lg shadow p-4 col-span-6 row-span-1">
          <Persona persona={persona} setPersona={setPersona}/>
        </div>
      </div>
    </div>
  );
}

export default App;
