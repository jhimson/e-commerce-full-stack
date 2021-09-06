/* eslint-disable no-nested-ternary */
import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ value, text }) => (
  <div className="flex items-center space-x-1 rating">
    <div className="flex">
      <span>
        {value >= 1 ? (
          <BsStarFill className="text-yellow-400" />
        ) : value >= 0.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <BsStarFill className="text-yellow-400" />
        ) : value >= 1.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <BsStarFill className="text-yellow-400" />
        ) : value >= 2.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <BsStarFill className="text-yellow-400" />
        ) : value >= 3.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <BsStarFill className="text-yellow-400" />
        ) : value >= 4.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
    <h5 className="text-lg font-semibold">{text && text}</h5>
  </div>
);

export default Rating;
