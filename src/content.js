import React, { useState, useEffect } from 'react';
import VisualImage from './components/visual_image';
import Locations from './components/locations';
import StatusList from './components/status_list';

function Content() {
  const [uxvData, setUxvData] = useState({});
  const [uxvDataArray, setUxvDataArray] = useState([]);
  const [data, setData] = useState([]);
  const [landmarks, setLandmarks] = useState([]);
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const fetchUxvs = async () => {
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

  const fetchData = async () => {
    fetch('https://ubap-api-xs7vfm2zyq-lz.a.run.app/get/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const fetchLandmarks = async () => {
    fetch('https://ubap-api-xs7vfm2zyq-lz.a.run.app/get/landmarks')
      .then(response => response.json())
      .then(data => {
        setLandmarks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const fetchImages = async () => {
    fetch('https://ubap-api-xs7vfm2zyq-lz.a.run.app/get/images')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchUxvs(); // Fetch data initially
    fetchData();
    fetchLandmarks();
    fetchImages();
    const intervalUxvs = setInterval(fetchUxvs, 5000); // Fetch data every 30 seconds
    const intervalData = setInterval(fetchData, 5000); // Fetch data every 30 seconds
    const intervalLandmarks = setInterval(fetchLandmarks, 5000); // Fetch data every 30 seconds
    const intervalImages = setInterval(fetchImages, 5000); // Fetch data every 30 seconds
    return () => {
        clearInterval(intervalUxvs);
        clearInterval(intervalData);
        clearInterval(intervalLandmarks);
        clearInterval(intervalImages);
    } // Cleanup interval on component unmount
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
        <VisualImage imageUrl={imageUrl} />
      </div>
      <div className="bg-gray-200 rounded-lg shadow p-4 col-span-1 row-span-1">
        <StatusList items={uxvDataArray} />
      </div>
      <div className="bg-gray-200 rounded-lg shadow col-span-2 row-span-1 overflow-hidden">
        <Locations uxvs={uxvDataArray} landmarks={landmarks} images={images} setImageUrl={setImageUrl} />
      </div>
    </div>
  );
}

export default Content;