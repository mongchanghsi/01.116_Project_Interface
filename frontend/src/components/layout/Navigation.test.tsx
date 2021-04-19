import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Bar', () => {
  it('renders navigation links', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Google Sheets')).toBeTruthy();
  });

  it('renders logo icons', () => {
    const { getByAltText } = render(<Navigation />);

    expect(getByAltText('ihis-logo')).toBeTruthy();
    expect(getByAltText('ntfgh-logo')).toBeTruthy();
  });
});
