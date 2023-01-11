import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name , email, message);
    toast.success("Message Sent")
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="email" placeholder="Your Email" required value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Your Message" required value={message}
            onChange={(e) => setMessage(e.target.value)}/>
          <button type="submit">Send</button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="Graphic" />
      </aside>
    </div>
  );
}

export default Contact;
