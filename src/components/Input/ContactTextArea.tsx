import { ChangeEventHandler, useEffect } from 'react';

interface TextAreaProps {
  placeholder?: string;
  name?: string;
  rows?: number;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string | number | readonly string[] | undefined;
  id: string;
}

export const ContactTextArea = ({
  id,
  placeholder = 'Enter text here',
  name = '',
  rows = 5,
  value,
  onChange,
}: TextAreaProps) => {
  useEffect(() => {
    const originalTextColor = '#8f9498';
    const animationTextColor = '#8a2be2';
    let container = document.getElementById(`container--contact-${id}`);

    if (!container) return; // stop if not found

    const textarea = container.getElementsByTagName('textarea')[0]; // the textarea element
    const label = container.getElementsByTagName('label')[0]; // the label element

    if (!textarea || !label) return; // stop if either not found

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
      if (textarea.value.length < 1) {
        label.style.color = '#fff';
        label.style.backgroundColor = animationTextColor;
        label.style.paddingBlock = '0.3rem';
        label.style.paddingInline = '0.8rem';
        label.style.borderRadius = '0.4rem';
        label.style.fontSize = '0.75rem';
        label.style.marginLeft = '0';
        label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem )`;
        label.style.top = `calc(100% - ${label.clientHeight}px - 1rem)`;
        textarea.style.width = `calc(100% - ${label.clientWidth}px - 1.2rem)`;
        label.innerText = 'Message';
      }
    }

    // on focus in, animate the label back to the left
    function focusOut() {
      if (textarea.value.length < 1) {
        // on focus out, return the label back to the original spot
        label.style.left = '0';
        label.style.top = `1rem`;
        label.style.color = originalTextColor;

        label.style.padding = '0';
        label.style.background = 'none';
        label.style.fontSize = '1rem';
        label.style.marginLeft = '1.2rem';
        textarea.style.width = '100%';
      }
    }
    // add listener to the textarea elements
    textarea.addEventListener('focusin', focusIn);
    textarea.addEventListener('focusout', focusOut);

    // clean up
    return () => {
      textarea.removeEventListener('focusin', focusIn);
      textarea.removeEventListener('focusout', focusOut);
    };
  }, [id]);

  return (
    <div
      id={`container--contact-${id}`}
      className="my-3 relative container--contact"
    >
      <textarea
        id={id}
        className="my-2 px-4 py-2 rounded-lg"
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
      />

      <label htmlFor={id} className="label--contact-textarea">
        {placeholder}
      </label>
    </div>
  );
};
