import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Header } from '../src/components/Header/index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Shuld show the header title...', () => {
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Banks List!');
  });

  it('Should clicekd the button', () => {
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument();
  });
});
