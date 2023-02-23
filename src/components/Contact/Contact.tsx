import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className=" w-full py-20">
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
        >
          <HiOutlineMail color={'#66fcf1'} className="text-xl shaking" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
