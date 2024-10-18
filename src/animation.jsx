import React, { useEffect, useRef } from "react";
import "./CSS/global.css";
import "./CSS/sections.css";

const SectionWithAnimation = ({ children, className }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className={`section ${className}`} ref={sectionRef}>
      {children}
    </div>
  );
};

export default SectionWithAnimation;
