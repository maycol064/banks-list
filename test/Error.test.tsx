import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Error } from '../src/components/Error';

describe('Error component', () => {
  beforeEach(() => {
    render(<Error />);
  });

  it('Shuld show the error title', () => {
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Error al cargar la información...');
  });

  it('Should show the image', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
