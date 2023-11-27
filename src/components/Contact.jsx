import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
// import { DevTool } from "@hookform/devtools";

const Contact = () => {
  const form = useForm();
  const formjs = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const notify = () => {
    toast.success("Message Sent", {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "dark",
      className: "bg-neutral-900 text-white ",
    });
  };
  const sendEmail = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_ywvdj6d",
        "template_v9nx5sm",
        formjs.current,
        "IjE3npLZjjNK_35OR"
      )
      .then(
        (result) => {
          console.log(result);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <div id="contact">
      <div className="flex flex-col items-center mt-32 m-10">
        <h1 className="text-4xl text-neutral-100">Contact</h1>
        <p className="text-xl mt-5 text-center text-neutral-200 mx-2">
          Want to connect? Please fill the form below.
        </p>
      </div>

      <form
        ref={formjs}
        onSubmit={handleSubmit(sendEmail)}
        noValidate
        className="grid gap-4 w-[330px] sm:w-[370px] md:w-[400px] lg:w-2/5 mx-auto md:bg-neutral-950 p-5 sm:p-8 rounded-xl border border-rose-700 shadow-md shadow-rose-700"
      >
        <h1 className="text-xl text-neutral-400">📩 Email Me</h1>
        <input
          type="text"
          size={1}
          placeholder="Your Name"
          className="bg-transparent border border-neutral-700 rounded-lg p-3"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="text-red-600 mt-0">{errors.name?.message}</p>
        <input
          type="email"
          size={1}
          placeholder="Your Email"
          className="bg-transparent border border-neutral-700 rounded-lg p-3"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email",
            },
          })}
        />
        <p className="text-red-600 mt-0">{errors.email?.message}</p>
        <textarea
          size={1}
          id="message"
          placeholder="Your Message"
          className="bg-transparent border border-neutral-700 rounded-lg p-3"
          {...register("message", {
            required: "Message cannot be empty",
          })}
        />
        <p className="text-red-600 mt-0">{errors.message?.message}</p>
        <button
          type="submit"
          value="Send"
          size={1}
          className="p-3 rounded-lg"
          style={{
            background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
          }}
        >
          Send
        </button>
      </form>
      {/* <DevTool control={control} /> */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
