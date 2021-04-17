import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './InputBody.css';

interface IProps {
  children?: React.ReactNode;
  setResult: any;
  setLoading: any;
  setError: any;
}

type IFile = File | undefined;

const InputBody: React.FC<IProps> = ({ setResult, setLoading, setError }) => {
  const [image1, setImage1] = useState<IFile>();
  const [image2, setImage2] = useState<IFile>();
  const [missingFile, setMissingFile] = useState<boolean>(false);

  const sendForOCR = async () => {
    if (!image1 || !image2) {
      return setMissingFile(true);
    }

    setLoading(true);
    setResult(null);
    setError(false);
    let formData = new FormData();

    formData.append('image1', image1);
    formData.append('image2', image2);

    try {
      const result: Response = await fetch('http://127.0.0.1:5000/ocr', {
        method: 'POST',
        body: formData,
      });
      if (result.status === 200) {
        setResult(await result.json());
        setMissingFile(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Card className='card-style'>
      <Card.Header>OCR Input</Card.Header>
      <Card.Body>
        <Card.Title>Top Image</Card.Title>
        {image1 ? (
          <img
            className='image-style'
            src={URL.createObjectURL(image1)}
            alt='image1'
          />
        ) : (
          <p>Please upload a top image of the IOL box</p>
        )}
        <input
          type='file'
          name='image1'
          accept='image/png, image/jpeg, image/jpg'
          onChange={(e) => {
            if (e.target.files) {
              setImage1(e.target.files[0]);
            }
          }}
        />
      </Card.Body>

      <Card.Body>
        <Card.Title>Back Image</Card.Title>
        {image2 ? (
          <img
            className='image-style'
            src={URL.createObjectURL(image2)}
            alt='image2'
          />
        ) : (
          <p>Please upload a back image of the IOL box</p>
        )}
        <input
          type='file'
          name='image2'
          accept='image/png, image/jpeg, image/jpg'
          onChange={(e) => {
            if (e.target.files) {
              setImage2(e.target.files[0]);
            }
          }}
        />
      </Card.Body>

      {missingFile ? (
        <i>Missing Files. Please make sure you upload the images.</i>
      ) : null}

      <Button variant='primary' onClick={sendForOCR}>
        Start OCR
      </Button>
    </Card>
  );
};

export default InputBody;
