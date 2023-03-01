import React, { ChangeEventHandler, useEffect } from 'react';

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  value: string | number | readonly string[];
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  autoCorrect?: 'on' | 'off';
}

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
}: InputProps) => {
  useEffect(() => {
    const originalTextColor = '#8f9498';
    const animationTextColor = '#8a2be2';
    let container = document.getElementById(`container--contact-${id}`);

    if (!container) return; // stop if not found

    const input = container.getElementsByTagName('input')[0]; // the input element
    const label = container.getElementsByTagName('label')[0]; // the label element

    if (!input || !label) return; // stop if either not found

    // on focus in, animate the label to the right
    function focusIn() {
      // during focusing in, move the label to the left 100% (right) minus the element width with some space
      // label.clientWidth is the element width excluding the margin
      // the first 1.2rem is to offset the margin left
      // the second 1.2rem is to give some breathing room

      // design 1, color change
      // label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem - 1.2rem)`;

      // label.style.color = animationTextColor;
      // design 2, background change
      if (input.value.length < 1) {
        label.style.color = '#fff';
        label.style.backgroundColor = animationTextColor;
        label.style.paddingBlock = '0.3rem';
        label.style.paddingInline = '0.8rem';
        label.style.borderRadius = '0.4rem';
        label.style.fontSize = '0.75rem';
        label.style.marginLeft = '0';
        label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem - 0.7rem)`;
        input.style.width = `calc(100% - ${label.clientWidth}px - 1.2rem - 0.7rem)`;
      }
    }

    // on focus in, animate the label back to the left
    function focusOut() {
      if (input.value.length < 1) {
        // on focus out, return the label back to the original spot
        label.style.left = '0';
        label.style.color = originalTextColor;

        label.style.padding = '0';
        label.style.background = 'none';
        label.style.fontSize = '1rem';
        label.style.marginLeft = '1.2rem';
        input.style.width = '100%';
      }
    }
    // add listener to the input elements
    input.addEventListener('focusin', focusIn);
    input.addEventListener('focusout', focusOut);

    // clean up
    return () => {
      input.removeEventListener('focusin', focusIn);
      input.removeEventListener('focusout', focusOut);
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
      />

      <label htmlFor={id} className="label--contact">
        {placeholder}
      </label>
    </div>
  );
};
