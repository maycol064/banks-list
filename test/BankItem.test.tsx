import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BankItem } from '../src/components/ListBanks/BankItem';

describe('BankItem component', () => {
  const mockBank = {
    description: 'A modern bank for you',
    age: 2,
    url: 'https://image.com/like-bank',
    bankName: 'Fast Bank',
  };

  beforeEach(() => {
    render(<BankItem bank={mockBank} />);
  });

  it('Render the bank info', () => {
    expect(screen.getByText(mockBank.bankName)).toBeInTheDocument();
    expect(screen.getByText(mockBank.description)).toBeInTheDocument();
    expect(
      screen.getByText(`Antigüedad: ${mockBank.age} años`)
    ).toBeInTheDocument();
  });

  it('Render the bank image', () => {
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockBank.url);
  });
});
