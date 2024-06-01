import React, { useState, useEffect } from 'react';

function Summary() {
  const [aiSummary, setAiSummary] = useState(['AI summary loading...']);
  const fetSummary = async () => {
    try {
        console.log('fetching summary')
        const response = await fetch('https://ubap-api-xs7vfm2zyq-lz.a.run.app/get/ai_summary');
        const result = await response.json();
        console.log(result['ai_summary'].split('\n'))
        setAiSummary(result['ai_summary'].split('\n'));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetSummary();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold">Summary</h1>
      {aiSummary.map((part, index) => (
        <div key={index}>{part}</div>
      ))}
      {/* {aiSummary.replace("\n", "<br\>")} */}
    </div>
  );
}

export default Summary;