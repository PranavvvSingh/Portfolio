import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";


const Contact = () => {
  const form = useForm();
  const {register, handleSubmit, formState:{errors}, reset}=form;

  const sendEmail = () => {
    // e.preventDefault();
    emailjs
      .sendForm("service_ywvdj6d", "template_v9nx5sm",form.current,"IjE3npLZjjNK_35OR")
      .then(
        (result) => {
          console.log(result);
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
        <h1 className="text-4xl">Contact</h1>
        <p className="text-xl mt-5">Wanna connect? Nigga hit me up.</p>
      </div>

      <div className="w-1/2 mx-auto bg-neutral-950 p-8 rounded-xl border border-rose-700 shadow-md shadow-rose-700">
        <form ref={form} onSubmit={handleSubmit(sendEmail)} noValidate>
          <div className="grid gap-4">
            <h1 className="text-xl text-neutral-400">📩 Email Me</h1>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent border border-neutral-700 rounded-lg p-3"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <p className="text-red-600 mt-0">{errors.name?.message}</p>
            <input
              type="email"
              name="email"
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
              name="message"
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
              className="p-3 rounded-lg"
              style={{
                background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
              }}
            >
              Send
            </button>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
};

export default Contact;
