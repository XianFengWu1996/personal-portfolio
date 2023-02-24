import Dialog from '../Dialog';

const ContactDialog = ({ open, onClose }: DialogState) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <h1>Contact</h1>

      <form>
        <fieldset>
          <legend>
            <div className="flex flex-col">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Message" />
              <button>Send</button>
              <button>Cancel</button>
            </div>
          </legend>
        </fieldset>
      </form>
    </Dialog>
  );
};

export default ContactDialog;
