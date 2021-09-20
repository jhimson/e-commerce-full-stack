import React from 'react';

const FlashMessage = ({ type, message }) => (
  <div
    className={`${
      type === 'danger' ? 'bg-red-500' : 'bg-green-600'
    } text-white text-center w-full py-2 font-semibold text-lg`}
  >
    <p>{message}</p>
  </div>
);

export default FlashMessage;
