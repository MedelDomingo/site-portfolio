import React, { useState, useEffect } from "react";

import { Button, Textarea, TextInput } from "flowbite-react";
import "./ContactMe.css";
import { Dialogbox } from "../../components/shared/Dialogbox";
import Loader from "../../components/shared/Loader";

function ContactMe() {
  const [openDialogComponent, setOpenDialogComponent] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ddbf5f58-b970-494a-bac2-773bac20fbdd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setOpenLoader(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setOpenLoader(false);
      setOpenDialogComponent(true);
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div
      id="contact-me-section"
      className="text-left px-4 py-4 md:py-12 md:max-w-[760px] m-auto md:px-4 border-gray-200"
    >
      <h2 className="text-[16px] font-bold text-center md:text-left">
        Contact Me
      </h2>
      <form
        onSubmit={formOnSubmit}
        className="max-w-[1200px] m-auto mt-[24px] relative"
      >
        {openLoader && <Loader loaderMessage="Message Sending..." />}
        <div className="mb-6 mt-3">
          <TextInput
            id="name"
            name="name"
            placeholder="Full Name"
            type="text"
            className="border-0"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6 mt-3">
          <TextInput
            id="email"
            name="email"
            placeholder="name@company.com"
            type="email"
            className="border-0"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <TextInput
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <Button
            type="submit"
            className="inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-zinc-950 cursor-pointer px-4 py-2 text-sm text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Send message
          </Button>
        </div>
      </form>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="mailto:medel.domingo000@gmail.com" className="hover:underline">
          medel.doming000@gmail.com
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <a href="tel:09291720110" className="hover:underline">
          +63 929 172 0110
        </a>
      </p>
      {openDialogComponent && <Dialogbox />}
    </div>
  );
}

export default ContactMe;
