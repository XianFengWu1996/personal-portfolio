import { focusIn, focusOut } from '@/helper/Input';
import { useEffect } from 'react';

export const ContactInput = ({
  type = 'text',
  name = '',
  required = false,
  placeholder = 'Enter text',
  id,
  value,
  onChange,
  autoComplete = 'off',
  autoCapitalize = 'off',
  autoCorrect = 'off',
  autoFocus = false,
}: InputProps) => {
  useEffect(() => {
    let container = document.getElementById(`container--contact-${id}`);
    if (!container) return; // stop if not found
    const input = container?.querySelector('input'); // the input element
    if (!input) return; // stop if either not found

    // add listener to the input elements
    input.addEventListener('focusin', () => focusIn(container));
    input.addEventListener('focusout', () => focusOut(container));

    // clean up
    return () => {
      input.removeEventListener('focusin', () => focusIn(container));
      input.removeEventListener('focusout', () => focusOut(container));
    };
  }, [id]);

  return (
    <div
      id={`container--contact-${id}`}
      className="my-3 relative container--contact"
    >
      <input
        id={id}
        className="input--contact"
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
      />

      <label htmlFor={id} className="label--contact-input">
        {placeholder}
      </label>
    </div>
  );
};
