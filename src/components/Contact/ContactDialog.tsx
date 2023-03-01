import { ChangeEvent, useEffect, useState } from 'react';
import BaseButton from '../button/BaseButton';
import Dialog from '../Dialog';
import { ContactInput } from '../Input/ContactInput';
import { ContactTextArea } from '../Input/ContactTextArea';
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

  useEffect(() => {
    // if the dialog opens focus the first input
    if (open) {
      const dialog = document.getElementById('contact--dialog');

      if (!dialog) return;

      const firstInput = dialog.getElementsByTagName('input')[0];

      if (firstInput.hasAttribute('autoFocus')) {
        firstInput.focus();
      }
    }
  }, [open]);

  return (
    <Dialog id="contact--dialog" open={open} onClose={onClose}>
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
          placeholder="Name"
          autoFocus={true}
        />
        <ContactInput
          id="email"
          name="email"
          value={state.email}
          onChange={handleInput}
          required
          placeholder="Email"
        />
        <ContactInput
          id="subject"
          name="subject"
          value={state.subject}
          onChange={handleInput}
          placeholder="Subject"
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
