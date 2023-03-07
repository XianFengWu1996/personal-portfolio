import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import ContactDialog from './ContactDialog';

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="contact" className=" w-full py-20">
      <ContactDialog open={open} onClose={handleClose} />

      <h1 className="title mx-auto">Get in Touch</h1>
      <div className="w-[85%] lg:w-[35%] mx-auto my-16 text-center text-lg">
        <p>
          Have an exciting project you need help with? Have a new career
          opportunity? Whether you have questions or just want to say hi,
          I&apos;ll try my best to get back at my earliest convenience.
        </p>

        <button
          id="contact--button"
          className="my-10 px-20 py-2 rounded-lg border-[#66fcf1] border-2"
          onClick={handleOpen}
        >
          <HiOutlineMail color={'#66fcf1'} className="text-xl shaking" />
        </button>
      </div>
    </section>
  );
};

export default Contact;
