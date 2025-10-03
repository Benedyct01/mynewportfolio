import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';



export const ContactUs = () => {
      const form = useRef();
        const [isSending, setIsSending] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);

      const sendEmail = (e) => {
            e.preventDefault();
            setIsSending(true);
        
            emailjs
              .sendForm('service_ta1ktyo', 'template_a80pwfd', form.current, {
                publicKey: 'BcHwnjrpoWobEmcZh',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                  setIsSubmitted(true);
                  form.current.reset();
                  setIsSending(false);
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
                
              );
          };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 mb-2 bg-[#f0f8ff] h-[35px] outline-0 w-full border border-amber-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-4 mb-2 bg-[#f0f8ff] h-[35px] outline-0 w-full border border-amber-500"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="p-4 mb-2 bg-[#f0f8ff] h-[35px] outline-0 w-full border border-amber-500"
          required
        />
        <textarea
          name="message"
          placeholder="Write Your Message"
          className="p-4 mb-2 bg-[#f0f8ff] outline-0 w-full h-[100px] border border-amber-500"
          required
        />
        <button
          type="submit"
          className="bg-amber-500 text-black cursor-pointer hover:bg-amber-600 p-4 w-[140px] h-[50px] flex items-center justify-center max-sm:w-full" disabled={isSending}>{isSending ? "Sending..." : "Send"}
        </button>
      </form>

      {isSubmitted && (
        
        <div className="absolute flex flex-col bottom-50 left-50 right-50 bg-blue-gradient p-6 rounded-lg text-center justify-center items-center shadow-lg backdrop-blur-md max-md:bottom-50 max-md:left-5 max-md:right-5 dark:bg-white/70">
          <h2 className="text-xl font-semibold mt-4 mb-4 text-amber-500">Message Sent!</h2>
          <p className="text-gray-800 mb-4 font-medium italic">Thank you for reaching out. I'll get back to you soon!</p>
         <button
            onClick={() => setIsSubmitted(false)} // Close popup
            className="bg-amber-500 dark:bg-white text-white  dark:text-amber-500 px-4 cursor-pointer py-2 rounded hover:bg-black max-md:text-xs"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}


