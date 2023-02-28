import { ChangeEvent, useState } from 'react';
import BaseButton from '../button/BaseButton';
import Dialog from '../Dialog';
import { ContactInput } from '../Input/ContactInput';
import { ContactTextArea } from '../Input/ContextTextArea';
interface ContactState {
  [key: string]: string;
}

const ContactDialog = ({ open, onClose }: DialogState) => {
  const [state, setState] = useState<ContactState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInput = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <form
        className="py-7 px-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-2xl">Contact</h1>

        <ContactInput
          id="name"
          name="name"
          value={state.name}
          onChange={handleInput}
          required
        />
        <ContactInput
          id="email"
          name="email"
          value={state.email}
          onChange={handleInput}
          required
        />
        <ContactInput
          id="subject"
          name="subject"
          value={state.subject}
          onChange={handleInput}
        />
        <ContactTextArea
          id="message"
          name="message"
          value={state.message}
          onChange={handleInput}
          placeholder="Type your message"
        />

        <div className="flex flex-col">
          <BaseButton text="Send" type="Filled" />
          <BaseButton text="Cancel" type="Transparent" />
        </div>
      </form>
    </Dialog>
  );
};

export default ContactDialog;
