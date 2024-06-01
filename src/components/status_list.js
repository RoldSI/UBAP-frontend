import React from 'react';

function StatusList({ items }) {
  return (
    <div className="overflow-x-auto max-h-full max-w-full">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 ${
              item.status !== 'online' ? 'order-first' : 'order-last'
            }`}
          >
            <span
              className={`w-4 h-4 flex-shrink-0 rounded-full ${
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
    </div>
  );
}

export default StatusList;