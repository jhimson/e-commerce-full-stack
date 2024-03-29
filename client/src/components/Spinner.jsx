import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = ({ loading, type, height, width, color }) =>
  loading ? (
    <Loader
      type={type || 'Circles'}
      color={color || '#00BFFF'}
      height={height || 50}
      width={width || 100}
      timeout={8000}
    />
  ) : null;

export default Spinner;
