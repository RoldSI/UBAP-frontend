import React, { useState, useEffect } from 'react';
import VisualImage from './components/visual_image';
import Locations from './components/locations';
import StatusList from './components/status_list';

function Content() {
  const [uxvData, setUxvData] = useState({});
  const [uxvDataArray, setUxvDataArray] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch('https://ubap-api-xs7vfm2zyq-lz.a.run.app/get/uxv');
        const result = await response.json();
        setUxvData(result);
        const dataArray = Object.entries(result).map(([key, value]) => ({
            uvx_id: key,
            ...value
        }));
        setUxvDataArray(dataArray);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data initially
    const interval = setInterval(fetchData, 5000); // Fetch data every 30 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
        <VisualImage />
      </div>
      <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
        <StatusList items={uxvDataArray} />
      </div>
      <div className="bg-gray-200 rounded-lg shadow col-span-2 row-span-1 overflow-hidden">
        <Locations uxvs={uxvDataArray} />
      </div>
    </div>
  );
}

export default Content;