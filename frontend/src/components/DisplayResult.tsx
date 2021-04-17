import React from 'react';
import LoadingGIF from '../assets/gif/loading.gif';
import { Card } from 'react-bootstrap';

interface IResult {
  brand: string;
  model: string;
  batch: string;
  serialnumber: string;
  expirydate: string;
  diopter: string;
}

interface IProps {
  children?: React.ReactNode;
  result: IResult | null;
  loading: boolean;
  error: boolean;
}

const DisplayResult: React.FC<IProps> = ({ result, loading, error }) => {
  return (
    <Card className='card-style'>
      <Card.Header>OCR Output</Card.Header>
      <Card.Body>
        {loading ? (
          <img className='gif-style' src={LoadingGIF} alt='loading-gif' />
        ) : null}
        {result ? (
          <>
            <Card.Title>Result</Card.Title>
            <p>
              <strong>Brand: </strong>
              {result.brand}
            </p>
            <p>
              <strong>Model: </strong>
              {result.model}
            </p>
            <p>
              <strong>Batch Number: </strong>
              {result.batch}
            </p>
            <p>
              <strong>Serial Number: </strong>
              {result.serialnumber}
            </p>
            <p>
              <strong>Expiry Date: </strong>
              {result.expirydate}
            </p>
            <p>
              <strong>Diopter: </strong>
              {result.diopter}
            </p>

            <i>Information has been updated in the Google Sheets</i>
          </>
        ) : null}
        {error ? (
          <div>
            <p>
              <strong>Failed OCR</strong>, please retake the image and make sure
              that the image is leveled.
            </p>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default DisplayResult;
