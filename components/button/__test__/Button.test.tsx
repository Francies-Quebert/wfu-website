import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

afterEach(() => {
  jest.clearAllMocks();
});

describe('button', () => {
  it('renders a button', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', {
      name: /Button/i,
    });

    expect(button).toBeInTheDocument();
  });
  it('should click', () => {
    const mockPress = jest.fn();
    render(<Button onClick={mockPress}>button</Button>);
    const button = screen.getByRole('button', {
      name: /Button/i,
    });
    fireEvent.click(button);
    expect(mockPress).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const mockPress = jest.fn();
    render(<Button disabled>button</Button>);
    const button = screen.getByRole('button', {
      name: /Button/i,
    });
    fireEvent.click(button);
    expect(mockPress).not.toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();
  });
});
