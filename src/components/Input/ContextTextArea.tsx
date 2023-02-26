interface TextAreaProps {
  placeholder?: string;
  name?: string;
  rows?: number;
}

export const ContactTextArea = ({
  placeholder = 'Enter text here',
  name = '',
  rows = 5,
}: TextAreaProps) => {
  return (
    <textarea
      className="my-2 px-4 py-2 rounded-lg"
      name={name}
      placeholder={placeholder}
      rows={rows}
    />
  );
};
