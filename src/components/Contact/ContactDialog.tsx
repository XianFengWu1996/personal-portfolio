import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import BaseButton from '../button/BaseButton';
import Dialog from '../Dialog';
import { ContactInput } from '../Input/ContactInput';
import { ContactTextArea } from '../Input/ContactTextArea';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MessageBox from '../MessageBox';
import { generateMessage } from '@/helper/Message';

interface ContactState {
  [key: string]: string;
}

const ContactDialog = ({ open, onClose }: DialogState) => {
  // STATES
  // Form States
  const [state, setState] = useState<ContactState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // Loading State
  const [loading, setLoading] = useState<boolean>(false);

  // Message box State
  const [messages, setMessages] = useState<Message.Props[]>([]);

  // handle input change
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

      firstInput.focus();
    }
  }, [open]);

  const onMessageSend = () => {
    try {
      // null or empty
      if (!state.name || state.name.length < 1) {
        throw new Error('Missing name');
      }

      // null or empty
      if (!state.email || state.email.length < 1) {
        throw new Error('Missing email');
      }

      // null or empty
      if (!state.subject || state.subject.length < 1) {
        throw new Error('Missing subject');
      }

      // null or empty
      if (!state.message || state.message.length < 1) {
        throw new Error('Missing message');
      }
    } catch (error) {
      return setMessages([
        ...messages,
        generateMessage('error', 'Oppps', (error as Error).message),
      ]);
    }

    const button = document.getElementById('button--contact-send');
    if (!button) return;
    button.style.minWidth = '60px';
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      button.style.minWidth = '100%';

      setMessages([
        ...messages,
        generateMessage(
          'success',
          'Message Sent',
          'Message has arrived in my inbox, please allow some time for me to get to you.'
        ),
      ]);
    }, 3000);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onCancel = () => {
    if (onClose) onClose();
  };

  const onMessageBoxDismiss = (id: string) => {
    const msgs = messages.filter((msg) => msg.id !== id);
    setMessages(msgs);
  };

  const mobile = useMediaQuery('(max-width: 640px)');

  return (
    <Dialog
      id="contact--dialog"
      open={open}
      onClose={onClose}
      fullScreen={mobile}
    >
      <form className="py-7 px-10 transition-all" onSubmit={onSubmit}>
        {messages.map((msg) => {
          return (
            <MessageBox
              key={msg.key}
              id={msg.id}
              type={msg.type}
              title={msg.title}
              text={msg.text}
              onClose={onMessageBoxDismiss}
            />
          );
        })}

        <h1 className="text-2xl">Contact</h1>

        <ContactInput
          id="name"
          name="name"
          value={state.name}
          onChange={handleInput}
          placeholder="Name"
        />
        <ContactInput
          id="email"
          name="email"
          value={state.email}
          onChange={handleInput}
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

        <div className="flex flex-col items-center w-full">
          <BaseButton
            id="button--contact-send"
            text="Send"
            type="Filled"
            loading={loading}
            onClick={onMessageSend}
          />
          <BaseButton text="Cancel" type="Transparent" onClick={onCancel} />
        </div>
      </form>
    </Dialog>
  );
};

export default ContactDialog;
