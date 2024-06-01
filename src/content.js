import React from 'react';
import VisualImage from './components/visual_image';
import Locations from './components/locations';

function Content() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 h-full">
        <div className="bg-gray-200 rounded-lg shadow p-4">
            <VisualImage/>
        </div>
        <div className="bg-gray-200 rounded-lg shadow p-4">
            <Locations/>
        </div>
    </div>
  );
}

export default Content;