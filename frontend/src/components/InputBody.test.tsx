import React from 'react';
import { render } from '@testing-library/react';
import InputBody from './InputBody';
import user from '@testing-library/user-event';

const file = [
  new File(['(⌐□_□)'], 'chucknorris.png', {
    type: 'image/png',
  }),
];

describe('InputBody', () => {
  global.URL.createObjectURL = jest.fn();
  const setResult = jest.fn();
  const setLoading = jest.fn();
  const setError = jest.fn();

  it('renders InputBody', () => {
    const { getByText, getByRole, getByLabelText } = render(
      <InputBody
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />
    );

    expect(getByText('OCR Input')).toBeTruthy();

    expect(getByText('Top Image')).toBeTruthy();
    expect(
      getByLabelText('Please upload a top image of the IOL box')
    ).toBeTruthy();

    expect(getByText('Back Image')).toBeTruthy();
    expect(
      getByLabelText('Please upload a back image of the IOL box')
    ).toBeTruthy();

    expect(getByRole('button', { name: 'Start OCR' })).toBeTruthy();
  });

  it('error message should appear when submit no files', () => {
    const { getByText, getByRole } = render(
      <InputBody
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />
    );

    const button = getByRole('button', { name: 'Start OCR' });
    user.click(button);
    expect(
      getByText('Missing Files. Please make sure you upload the images.')
    ).toBeTruthy();
  });

  it('error message should appear when if submit only 1 image', () => {
    const { getByText, getByLabelText, getByAltText, getByRole } = render(
      <InputBody
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />
    );

    const uploader1 = getByLabelText(
      'Please upload a top image of the IOL box'
    ) as HTMLInputElement;

    user.upload(uploader1, file);
    expect(uploader1.files).toHaveLength(1);
    expect(getByAltText('image1')).toBeTruthy();

    const button = getByRole('button', { name: 'Start OCR' });
    user.click(button);
    expect(
      getByText('Missing Files. Please make sure you upload the images.')
    ).toBeTruthy();
  });

  it('upload images and it display the images', () => {
    const { getByLabelText, getByAltText } = render(
      <InputBody
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />
    );

    const uploader1 = getByLabelText(
      'Please upload a top image of the IOL box'
    ) as HTMLInputElement;

    user.upload(uploader1, file);
    expect(uploader1.files).toHaveLength(1);
    expect(getByAltText('image1')).toBeTruthy();

    const uploader2 = getByLabelText(
      'Please upload a back image of the IOL box'
    ) as HTMLInputElement;

    user.upload(uploader2, file);
    expect(uploader2.files).toHaveLength(1);
    expect(getByAltText('image2')).toBeTruthy();
  });
});
