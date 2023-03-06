import { focusIn, focusOut } from '@/helper/Input';
import { useEffect, useRef } from 'react';

export const ContactTextArea = ({
  id,
  placeholder = 'Enter text here',
  name = '',
  rows = 5,
  value,
  onChange,
  required = false,
  autoComplete = 'off',
  autoCapitalize = 'off',
  autoCorrect = 'off',
  autoFocus = false,
}: TextAreaProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let container = ref.current;

    if (!container) return; // stop if not found

    const textarea = container.querySelector('textarea'); // the textarea element
    const label = container.querySelector('label'); // the textarea element

    if (!textarea || !label) return; // stop if either not found

    // add listener to the textarea elements
    textarea.addEventListener('focusin', () => focusIn(container));
    textarea.addEventListener('focusout', () => focusOut(container));

    // clean up
    return () => {
      textarea.removeEventListener('focusin', () => focusIn(container));
      textarea.removeEventListener('focusout', () => focusOut(container));
    };
  }, [id]);

  return (
    <div id={id} ref={ref} className="my-3 relative container--contact">
      <textarea
        id={`contact--textarea-${id}`}
        className="my-2 px-4 py-2 rounded-lg"
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
        required={required}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
      />

      <label
        htmlFor={`contact--textarea-${id}`}
        className="label--contact-textarea"
      >
        {placeholder}
      </label>
    </div>
  );
};
