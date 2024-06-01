import React from 'react';

function VisualImage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-bold mb-4">Unmanned Vehicle Image</h1>
      <div className="flex-grow flex justify-center items-center overflow-hidden">
        <img
          src="https://blog.edv-pm.de/wp-content/uploads/2017/11/Grabh%C3%BCgelfeld-5.jpg"
          alt="Visualized"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default VisualImage;