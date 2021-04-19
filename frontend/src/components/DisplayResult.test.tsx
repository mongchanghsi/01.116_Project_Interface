import React from 'react';
import { render } from '@testing-library/react';
import DisplayResult from './DisplayResult';

describe('DisplayResult', () => {
  it('renders DisplayResult - initial state', () => {
    const result = null;
    const loading = false;
    const error = false;
    const { getByText } = render(
      <DisplayResult result={result} loading={loading} error={error} />
    );

    expect(getByText('OCR Output')).toBeTruthy();
  });

  it('renders DisplayResult - successful state', () => {
    const result = {
      brand: 'mockBrand',
      model: 'mockModel',
      batch: 'mockBatch',
      serialnumber: 'mockSN',
      expirydate: 'mockExpiry',
      diopter: 'mockDiopter',
    };

    const loading = false;
    const error = false;
    const { getByText } = render(
      <DisplayResult result={result} loading={loading} error={error} />
    );

    expect(getByText('OCR Output')).toBeTruthy();

    expect(getByText('Brand:')).toBeTruthy();
    expect(getByText(result.brand)).toBeTruthy();

    expect(getByText('Model:')).toBeTruthy();
    expect(getByText(result.model)).toBeTruthy();

    expect(getByText('Batch Number:')).toBeTruthy();
    expect(getByText(result.batch)).toBeTruthy();

    expect(getByText('Serial Number:')).toBeTruthy();
    expect(getByText(result.serialnumber)).toBeTruthy();

    expect(getByText('Expiry Date:')).toBeTruthy();
    expect(getByText(result.expirydate)).toBeTruthy();

    expect(getByText('Diopter:')).toBeTruthy();
    expect(getByText(result.diopter)).toBeTruthy();

    expect(
      getByText('Information has been updated in the Google Sheets')
    ).toBeTruthy();
  });

  it('renders DisplayResult - loading state', () => {
    const result = null;
    const loading = true;
    const error = false;
    const { getByText, getByAltText } = render(
      <DisplayResult result={result} loading={loading} error={error} />
    );

    expect(getByText('OCR Output')).toBeTruthy();
    expect(getByAltText('loading-gif')).toBeTruthy();
  });

  it('renders DisplayResult - error state', () => {
    const result = null;
    const loading = false;
    const error = true;
    const { getByText } = render(
      <DisplayResult result={result} loading={loading} error={error} />
    );

    expect(getByText('OCR Output')).toBeTruthy();
    expect(getByText('Failed OCR')).toBeTruthy();
  });
});
