import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const formPublicKey = import.meta.env.VITE_EMAIL_JS_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const confirmSend = window.confirm("Are you sure you want to send?");
    if (confirmSend) {
      emailjs
        .sendForm("service_r0tesfr", "template_dd6imcg", form.current, {
          publicKey: formPublicKey,
        })
        .then(() => {
          toast.success("The form was submitted successfully");
        });
      e.target.reset();
    }
  };

  const contactSocialIcons = [
    { path: "https://www.instagram.com/thecopyartist_/", icon: "instagram" },
    { path: "https://www.linkedin.com/in/ronak-j-patel/", icon: "linkedin" },
    { path: "https://github.com/R-o-n-a-k", icon: "github" },
  ];

  const contactInfo = [
    { data: "ronak.p.1206@gmail.com", icon: "envelope" },
    { data: "Mumbai, India", icon: "map-marker-alt" },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="contact__heading" data-aos="fade-up">
        <h2 className="section__title ">Contact Me</h2>
        <span className="section__subtitle">Let's get in touch.</span>
      </div>
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            {contactInfo.map((info) => (
              <div
                className="contact__icon-detail"
                data-aos="fade-right"
                key={info.data}
              >
                <span className={`fas fa-${info.icon}`}></span>
                <p>{info.data}</p>
              </div>
            ))}
          </div>

          <form
            className="contact__form"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-offset="110"
          >
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                cols="20"
                rows="7"
                className="contact__form-input"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>
            <div className="contact__form-div">
              <button className="button contact__form-button" type="submit">
                Send <i className="fa-regular fa-paper-plane sendI"></i>
              </button>
            </div>
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

          <div className="contact__social">
            {contactSocialIcons.map((link) => (
              <a
                className="contact__social-icon"
                target="_blank"
                href={link.path}
                key={link.path}
                data-aos="fade-right"
              >
                <i className={`fa-brands fa-${link.icon}`} />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
