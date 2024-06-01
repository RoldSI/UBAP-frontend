import React from 'react';

function StatusList({ items }) {
  return (
    <div className="flex flex-wrap gap-4 overflow-x-auto max-h-full max-w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 ${
            item.status !== 'online' ? 'order-first' : 'order-last'
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full ${
              item.status === 'online' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></span>
          <span
            className={`text-lg ${
              item.status !== 'online' ? 'text-red-500 font-bold' : ''
            }`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StatusList;