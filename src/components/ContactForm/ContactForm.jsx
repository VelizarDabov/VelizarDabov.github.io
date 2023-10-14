import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
const ContactForm = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iqjeit6', 'template_7uajuns', form.current, 'ie9ugSM03hYpDkCyS')
      .then((result) => {
          console.log(result.text);  
          e.target.reset();  
          alert('Email sent')
      }, (error) => {
          console.log(error.text);
      });
  };
return( <div className='flex space-x-4'>
<div className="mockup-phone justify-center align-center mt-20">
  <div className='camera'></div>
    <div className='display'>
      <div className='artboard artboard-demo phone-2'>
  <div className="bg-transparent p-12 rounded-lg shadow-lg">
  <h2 className="text-4xl font-semibold mb-6 text-purple-500">Contact Me</h2>
  <form onSubmit={sendEmail} className="space-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-white-600">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="p-4 border border-purple-300 rounded"
        placeholder="John Doe"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-white-600">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="p-4 border border-purple-300 rounded"
        placeholder="john@example.com"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="text-white-600">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        className="p-4 border border-purple-300 rounded"
        placeholder="Your message here"
        required
      ></textarea>
    </div>
<div className='px-14 '>
<button
      type="submit"
      className="btn min-w-full"
    >
      Submit
    </button>
</div>

  </form>
  </div>
  </div>
</div>
</div>
</div>)
}
export default ContactForm;