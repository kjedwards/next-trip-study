import React from 'react';
import { render, screen } from '@testing-library/react';
import {BannerImage} from './BannerImage';
import MetroTransitLogo from '../../images/MetroTransitLogo.svg';

describe('BannerImage', () => {
  test('renders banner image', () => {
    render(<BannerImage src={MetroTransitLogo} alt="image" />);
    const imgElement = screen.getByAltText('image');
    expect(imgElement).toBeInTheDocument();
  });

  test('renders banner image with styles', () => {
    render(<BannerImage src={MetroTransitLogo} alt="image" />);
    const imgElement = screen.getByAltText('image');
    expect(imgElement).toHaveStyle('object-fit: cover');
    expect(imgElement).toHaveStyle('width: 100vw');
  });
});
