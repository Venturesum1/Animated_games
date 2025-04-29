import React, { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { motion } from "framer-motion";
import Popup from "./Popup";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const ContactPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative w-11/12 max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <button
        className="absolute top-3 right-3 text-gray-500 transition hover:scale-125 hover:text-red-500"
        onClick={onClose}
      >
        ✖
      </button>

      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.img
          src="/img/logo.webp"
          alt="Logo"
          className="mb-4 w-16 h-16 object-contain"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        />
        <motion.h2
          className="mb-2 text-xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="mb-2 text-gray-600"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <strong>Office Location:</strong> Google HQ, Mountain View, CA
        </motion.p>

        <motion.p
          className="mb-2 text-gray-600"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <strong>Email:</strong> contact@zentry.com
        </motion.p>

        <motion.p
          className="mb-4 text-gray-600"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/zentry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/zentry
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.935434509374!2d-122.0842496846929!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
  );
};

const Contact = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked!"); // Debugging log
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  const Button = ({ title, containerClass, onClick }) => (
    <button className={containerClass} onClick={onClick}>
      {title}
    </button>
  );
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

<button
  style={{
    backgroundColor: "white",
    border: "2px solid black",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "black",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }}
  onClick={handleButtonClick}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  }}
>
  Contact Us
</button>
        </div>
      </div>

      <Popup isVisible={isPopupVisible} onClose={handleClosePopup}>
        <img
          src="/img/logo.webp"
          alt="Logo"
          className="mb-4 w-16 h-16 object-contain"
        />
        <h2 className="mb-2 text-xl font-bold">Contact Us</h2>
        <p className="mb-4 text-gray-600">
          <strong>Office Location:</strong> Google HQ, Mountain View, CA
        </p>
        <p className="mb-4 text-gray-600">
          <strong>Email:</strong> contact@zentry.com
        </p>
        <p className="mb-4 text-gray-600">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/zentry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            github.com/zentry
          </a>
        </p>
      </Popup>
    </div>
  );
};

export default Contact;