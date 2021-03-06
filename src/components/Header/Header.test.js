import React from 'react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from './Header';

test('renders product-app-header with correct text', () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId("header")

    expect(headerElement.textContent).toBe("Product app");
});
