import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Prona1 from './Prona1';

describe('Prona1 component', () => {
  it('renders correctly', () => {
    const { getByText, getByLabelText } = render(<Prona1 />);
    
    // Check if the component renders the title
    expect(getByText('Aplikimi për vazhdim të licensës së vlerësuesve të pronave të paluajtshme')).toBeInTheDocument();
    
    // Check if the form elements are present
    expect(getByLabelText('Numri personal:')).toBeInTheDocument();
    expect(getByLabelText('Emri dhe mbiemri:')).toBeInTheDocument();
    expect(getByLabelText('Komuna:')).toBeInTheDocument();
    expect(getByLabelText('Numri i telefonit:')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();
    expect(getByText('Vazhdo')).toBeInTheDocument();
    expect(getByText('Anulo')).toBeInTheDocument();
  });

  it('calls handleSubmit when the form is submitted', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<Prona1 />);
    fireEvent.click(getByText('Vazhdo'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('calls handleReset when the reset button is clicked', () => {
    const handleReset = jest.fn();
    const { getByText } = render(<Prona1 />);
    fireEvent.click(getByText('Anulo'));
    expect(handleReset).toHaveBeenCalled();
  });
});
