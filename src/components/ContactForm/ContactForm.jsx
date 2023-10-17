import React, {useState,useRef} from "react";
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs.sendForm('*********', '***********', form.current, '*****************')
      .then((result) => {
          console.log(result.text);  
          e.target.reset();  
          alert('Email sent')
          
      }, (error) => {
          console.log(error.text);
      });
      setFormData({
        name: '',
        email: '',
        message: '',})
  };
return(<div id= 'contact' className='flex space-x-4'>
<div className="mockup-phone block items-right justify-right min-h-screen-80vh bgg-about bgg-cover bgg-center bgg-no-repeat mt-10 ">
<div className="camera"></div> 
<div className="display ">
  <div className="artboard  items-right justify-rightart board-demo phone-1  bg-about bg-cover bg-center bg-no-repeat artbord-ml-10 text-white">
  <div className="bg-transparent p-12 rounded-lg shadow-lg">
  <h2 className="text-4xl justify-center align-center font-semibold mb-2 text-purple-500 ">Contact Me</h2>
  <form ref={form} onSubmit={sendEmail} className="space-y-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-white">Your Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="p-1 border border-purple-300 rounded"
        placeholder="John Doe"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className=" text-white">Your Email</label>
      <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="p-1 border border-purple-300 rounded"
      placeholder="john@example.com"
      required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="text-white-600 text-white">Message</label>
      <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="2"
      className="p-4 border border-purple-300 rounded"
      placeholder="Your message here"
      required
      ></textarea>
    </div>
<div className='px-14 '>
<button
      type="submit"
      className="btn min-w-full text-white mt-20 "
    >
      Send
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

