import BaseButton from '../button/BaseButton';
import Dialog from '../Dialog';
import { ContactInput } from '../Input/ContactInput';
import { ContactTextArea } from '../Input/ContextTextArea';
const ContactDialog = ({ open, onClose }: DialogState) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <form className="py-7 px-10">
        <h1 className="text-2xl">Contact</h1>

        <fieldset>
          <legend>
            <ContactInput placeholder="Name" />
            <ContactInput placeholder="Email" />
            <ContactInput placeholder="Subject" />
            <ContactTextArea placeholder="Type some message" />

            <div className="flex flex-col">
              <BaseButton text="Send" type="Filled" />
              <BaseButton text="Cancel" type="Transparent" />
            </div>
          </legend>
        </fieldset>
      </form>
    </Dialog>
  );
};

export default ContactDialog;
