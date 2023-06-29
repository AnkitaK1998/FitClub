import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9xbjmob",
        "template_2ldo2k5",
        form.current,
        "hC98VmUZKg5fUgtQh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here..."
          />
          <button type="submit" className="btn btn-j" onSubmit={sendEmail}>
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
