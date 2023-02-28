import { ChangeEventHandler } from 'react';

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
  return (
    <textarea
      id={id}
      className="my-2 px-4 py-2 rounded-lg"
      name={name}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      value={value}
    />
  );
};
