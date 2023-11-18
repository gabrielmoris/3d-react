import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fox } from "../models/Fox";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { useAlert } from "../hooks/useAlert";
import { Alert } from "../components/Alert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Gabrielcmoris",
          to_email: "gabrielcmoris@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_KEY
      );
      setIsLoading(false);
      showAlert({ show: true, text: "Message sent sucessfully", type: "success" });
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
      }, 5000);

      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      showAlert({ show: true, text: "I didn't receive your message" });
      setCurrentAnimation("walk.left");
      setIsLoading(false);
      console.log("ERROR SENDING MAIL", e);
    }
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative h-full flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Gabriel"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="gabrielcmoris@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="input"
              rows={4}
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button disabled={isLoading} type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fav: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.3} />
          <Suspense fallbacj={<Loader />}>
            <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.7, -0.75, 0]} scale={[0.5, 0.4, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
