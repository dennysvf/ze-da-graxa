import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

describe('Checkbox', () => {
  it('renders correctly with label', () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('handles checked state correctly', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        label="Test Checkbox"
        checked={false}
        onChange={handleChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('shows required indicator when required', () => {
    render(<Checkbox label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('displays hint text when provided', () => {
    render(
      <Checkbox
        label="With Hint"
        hint="This is a hint"
      />
    );
    expect(screen.getByText('This is a hint')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Disabled Checkbox" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('has correct ARIA attributes when in error state', () => {
    render(
      <Checkbox
        label="Error Checkbox"
        error
        hint="Error message"
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('can be focused and activated with keyboard', async () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        label="Keyboard Checkbox"
        onChange={handleChange}
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    expect(checkbox).toHaveFocus();
    
    await userEvent.keyboard('[Space]');
    expect(handleChange).toHaveBeenCalled();
  });
});

describe('CheckboxGroup', () => {
  const options = ['option1', 'option2', 'option3'];

  it('renders group of checkboxes correctly', () => {
    render(
      <CheckboxGroup
        label="Test Group"
        value={[]}
        onChange={() => {}}
      >
        {options.map(option => (
          <Checkbox
            key={option}
            label={option}
            value={option}
          />
        ))}
      </CheckboxGroup>
    );

    options.forEach(option => {
      expect(screen.getByLabelText(option)).toBeInTheDocument();
    });
  });

  it('handles multiple selections correctly', () => {
    const handleChange = jest.fn();
    render(
      <CheckboxGroup
        label="Test Group"
        value={['option1']}
        onChange={handleChange}
      >
        {options.map(option => (
          <Checkbox
            key={option}
            label={option}
            value={option}
          />
        ))}
      </CheckboxGroup>
    );

    fireEvent.click(screen.getByLabelText('option2'));
    expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  it('shows error state on all checkboxes when group has error', () => {
    render(
      <CheckboxGroup
        label="Error Group"
        value={[]}
        onChange={() => {}}
        error
        hint="Error message"
      >
        {options.map(option => (
          <Checkbox
            key={option}
            label={option}
            value={option}
          />
        ))}
      </CheckboxGroup>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('disables all checkboxes when group is disabled', () => {
    render(
      <CheckboxGroup
        label="Disabled Group"
        value={[]}
        onChange={() => {}}
        disabled
      >
        {options.map(option => (
          <Checkbox
            key={option}
            label={option}
            value={option}
          />
        ))}
      </CheckboxGroup>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toBeDisabled();
    });
  });

  it('has correct ARIA attributes for accessibility', () => {
    render(
      <CheckboxGroup
        label="Accessible Group"
        value={[]}
        onChange={() => {}}
        hint="Helper text"
      >
        {options.map(option => (
          <Checkbox
            key={option}
            label={option}
            value={option}
          />
        ))}
      </CheckboxGroup>
    );

    const group = screen.getByRole('group');
    expect(group).toHaveAttribute('aria-labelledby');
    expect(group).toHaveAttribute('aria-describedby');
  });
});
