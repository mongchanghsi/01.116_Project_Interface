import React from 'react';
import LoadingGIF from '../assets/loading.gif';

interface IProps {
  children?: React.ReactNode;
  result: any;
  loading: any;
  error: any;
}

const DisplayResult: React.FC<IProps> = ({ result, loading, error }) => {
  return (
    <>
      {loading ? <img src={LoadingGIF} alt='loading-gif' /> : null}
      {result ? (
        <div>
          <p>Brand: {result.brand}</p>
          <p>Model: {result.model}</p>
          <p>Batch Number: {result.batch}</p>
          <p>Serial Number: {result.serialnumber}</p>
          <p>Expiry Date: {result.expirydate}</p>
          <p>Diopter: {result.diopter}</p>
        </div>
      ) : null}
      {error ? (
        <div>
          <p>Failed OCR, please retry.</p>
        </div>
      ) : null}
    </>
  );
};

export default DisplayResult;
