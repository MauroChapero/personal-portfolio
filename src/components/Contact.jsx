import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/047740c2-9147-4310-9919-1851ebfde9e1"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 border-stone-400 dark:border-stone-300 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 border-stone-400 dark:border-stone-300 rounded-md focus:outline-none"
          />
          <textarea 
            name="message" 
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 border-stone-400 dark:border-stone-300 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white dark:text-stone-900 bg-stone-900 dark:bg-white"
            >
              Work With Me
            </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
