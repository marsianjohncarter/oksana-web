/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
 
import { Alert, Button } from "@material-tailwind/react";
 
const changeClasses = (classesRemove, classesAdd) => {

}


export const ContactUs = () => {
  const form = useRef();
  let alert = <></>;
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.user_name.value || !form.current.message.value || !form.current.user_email.value) {
      return <AlertDismissible open={true} message={'Please enter valid data.'}/>
      
    } else {
      alert = <></>;
      emailjs
      .send(
        "service_74uzx2b",
        "template_4gc56rp",
        {
          user_name: form.current.user_name.value,
          message: form.current.message.value,
          user_email: form.current.user_email.value,
          reply_to: form.current.user_email.value,
        },
        "nqIxTen4w1LCPdO_H"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.user_name.value = '';
          form.current.message.value = '';
          form.current.user_email.value = '';
        },
        (error) => {
          console.log("FAILED...", error);
          form.current.user_name.value = '';
          form.current.message.value = '';
          form.current.user_email.value = '';
        }
      );
    return <></>

    }


  };

  return (
        // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <>
   
    <div className="mt-8 lg:w-1/2 lg:mx-6">
      
      <div className="visible xs:invisible sm:invisible md:visible lg:visible xl:visible w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
        <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
          Contact form
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Ask us everything and we would love to hear from you
        </p>
        <form className="mt-6" ref={form} onSubmit={sendEmail}>
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              name='user_name'
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              name="user_email"
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Message
            </label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Message"
              name="message"
              defaultValue={""}
            />
          </div>
          <input type="submit" value="Send" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50" />

        </form>
      </div>
    </div>
    </>
  );
};
