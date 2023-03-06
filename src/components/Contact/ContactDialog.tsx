import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import BaseButton from '../button/BaseButton';
import Dialog from '../Dialog';
import { ContactInput } from '../Input/ContactInput';
import { ContactTextArea } from '../Input/ContactTextArea';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import MessageBox from '../MessageBox';

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

  function focusOut(
    item: HTMLElement,
    input: HTMLInputElement,
    label: HTMLLabelElement,
    originalTextColor: string
  ) {
    console.log(item);
    // remove the outline
    if (item) item.style.outline = 'none';

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

  const onMessageSend = async () => {
    setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      const form = document.getElementById('contact--form-fieldset');
      form?.querySelectorAll('div').forEach((item) => {
        const input = item.querySelector('input');
        const label = item.querySelector('label');
        const originalTextColor = '#8f9498';

        if (!input || !label) return;

        console.log('ran');

        focusOut(item, input, label, originalTextColor);
      });
    }, 500);

    // setLoading(true);
    // const button = document.getElementById('button--contact-send');
    // // start the loading process
    // if (!button) return;
    // button.style.minWidth = '60px';
    // // set a 1 second timer, to make the process look more smooth, else the process might end before even seeing the loading button
    // setTimeout(async () => {
    //   try {
    //     // null or empty
    //     if (!state.name || state.name.length < 1) {
    //       throw new Error('Missing name');
    //     }
    //     // null or empty
    //     if (!state.email || state.email.length < 1) {
    //       throw new Error('Missing email');
    //     }
    //     // null or empty
    //     if (!state.subject || state.subject.length < 1) {
    //       throw new Error('Missing subject');
    //     }
    //     // null or empty
    //     if (!state.message || state.message.length < 1) {
    //       throw new Error('Missing message');
    //     }
    //     // start the http request to send the message to the backend
    //     const response = await fetch('/api/email', {
    //       method: 'post',
    //       body: JSON.stringify({
    //         ...state,
    //       }),
    //     });
    //     // save the json object that was send back
    //     let json = await response.json();
    //     // check if the error has occur or if the response was ok
    //     if (!response.ok) {
    //       // check if there is an error message
    //       if (json.message) {
    //         throw new Error(json.message);
    //       } else {
    //         // use the default error text for the specific error
    //         throw new Error(response.statusText);
    //       }
    //     } else {
    //       // set the success message box and reset the form
    //       setMessages([
    //         ...messages,
    //         generateMessage(
    //           'success',
    //           'Message Sent',
    //           'Message has arrived in my inbox, please allow some time for me to get to you.'
    //         ),
    //       ]);
    //       setState({
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: '',
    //       });
    //     }
    //     // console.log(await response.json());
    //   } catch (error) {
    //     console.log(error);
    //     return setMessages([
    //       ...messages,
    //       generateMessage('error', 'Oppps', (error as Error).message),
    //     ]);
    //   } finally {
    //     // stop the loading for the button and reset the button width
    //     setLoading(false);
    //     button.style.minWidth = '100%';
    //   }
    // }, 1000);
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

        <fieldset id="contact--form-fieldset">
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
        </fieldset>

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
