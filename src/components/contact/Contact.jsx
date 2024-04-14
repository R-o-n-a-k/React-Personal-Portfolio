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

  const contactSocialIcons = [
    { path: "https://www.instagram.com/rroonnaakk_/", icon: "instagram" },
    { path: "https://www.linkedin.com/in/ronak-j-patel/", icon: "linkedin" },
    { path: "https://github.com/R-o-n-a-k", icon: "github-alt" },
  ];

  const contactInfo = [
    { data: "ronak.p.1206@gmail.com", icon: "envelope" },
    // { data: "+91 ", icon: "phone-alt" },
    { data: "Mumbai, India", icon: "map-marker-alt" },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="contact__heading">
        <h2 className="section__title ">Contact Me</h2>
        <span className="section__subtitle">Let's get in touch.</span>
      </div>
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            {contactInfo.map((info) => (
              <div class="contact__icon-detail">
                <span class={`fas fa-${info.icon}`}></span>
                <p>{info.data}</p>
              </div>
            ))}
          </div>

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
                Send <i class="fa-regular fa-paper-plane sendI"></i>
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
              >
                <i className={`uil uil-${link.icon}`}></i>
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
