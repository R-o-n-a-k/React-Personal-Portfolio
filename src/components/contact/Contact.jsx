import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r0tesfr", "template_dd6imcg", form.current, {
        publicKey: "F15DiwIfiUoFD375Q",
      })
      .then(() => {
        toast.success("The form was submitted successfully");
      });
    e.target.reset();
  };

  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container">
        <div className="contact__content">
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="FirstName LastName"
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="contact__form-input"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button className="button" type="submit">
              Send
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              limit={1}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
