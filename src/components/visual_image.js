import React from 'react';

function VisualImage({ imageUrl }) {
  if (imageUrl=='') {
    return (
      <div className="flex flex-col h-full">
        <h1 className="text-xl font-bold mb-4">Select image please...</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-xl font-bold mb-4">Unmanned Vehicle Image</h1>
      <div className="flex-grow flex justify-center items-center overflow-hidden">
        <img
          src={imageUrl}
          alt="Visualized"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default VisualImage;