import React from 'react';
import { render } from '@testing-library/react';
import InputBody from './InputBody';

describe('InputBody', () => {
  it('renders InputBody', () => {
    const setResult = jest.fn();
    const setLoading = jest.fn();
    const setError = jest.fn();

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

    expect(getByRole('button', { name: 'Start OCR' }));
  });
});
