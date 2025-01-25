import { useEffect, useRef, useState } from "react";
import "./imonials.css";

import scroll from "../assets/scroll.png"
      
const testimonialsData = [
  {
    name: "Michelle Anna😊 ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  },
  {
    name: "Michelle Anna😎 ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  },
  {
    name: "Michelle Anna👌 ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  },
  {
    name: "Michelle Anna☠️ ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  },
  {
    name: "Michelle Anna🔥 ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  },
  {
    name: "Michelle Anna😂 ",
    title: "CEO, Co-Founder, XYZ Inc.",
    img: scroll,
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="imonial-container">
      <button className="arroww left" onClick={prevSlide}>&larr;</button>
      <div className="slid" ref={sliderRef}>
        {testimonialsData.map((testimonial, i) => (
          <div className="imonial" key={i}>
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.title}</p>
          </div>
        ))}
      </div>
      <button className="arroww right" onClick={nextSlide}>&rarr;</button>
      <div className="dots">
        {testimonialsData.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
