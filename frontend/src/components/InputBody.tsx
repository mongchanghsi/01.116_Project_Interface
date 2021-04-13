import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface IProps {
  children?: React.ReactNode;
  setResult: any;
  setLoading: any;
  setError: any;
}

const InputBody: React.FC<IProps> = ({ setResult, setLoading, setError }) => {
  const [image1, setImage1] = useState<any>();
  const [image2, setImage2] = useState<any>();

  const sendForOCR = async () => {
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
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
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
      <Button onClick={sendForOCR}>OCR</Button>
    </>
  );
};

export default InputBody;
