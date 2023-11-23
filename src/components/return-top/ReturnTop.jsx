import React, { useEffect, useState } from "react";
import "./style.scss";

const ReturnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleReturnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="your-return-top-button-style"
          onClick={handleReturnTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 173.137 173.137"
            id="ArrowTop"
          >
            <g
              id="Groupe_522"
              data-name="Groupe 522"
              transform="translate(-1273 -217)"
            >
              <path
                id="Rectangle_160"
                data-name="Rectangle 160"
                d="M-4.723-9.815A5.092,5.092,0,0,0-9.815-4.723V137.86a5.092,5.092,0,0,0,5.092,5.092H137.86a5.092,5.092,0,0,0,5.092-5.092V-4.723a5.092,5.092,0,0,0-5.092-5.092H-4.723m0-10.185H137.86A15.294,15.294,0,0,1,153.137-4.723V137.86a15.294,15.294,0,0,1-15.277,15.277H-4.723A15.294,15.294,0,0,1-20,137.86V-4.723A15.294,15.294,0,0,1-4.723-20Z"
                transform="translate(1293 237)"
                fill="#dcb854"
              />
              <path
                id="Polygone_2"
                data-name="Polygone 2"
                d="M70.931,16.547l-51.052,64.2h102.1l-51.052-64.2M70.931,0a5.066,5.066,0,0,1,3.986,1.923l65.829,82.789a5.092,5.092,0,0,1-3.986,8.262H5.1a5.092,5.092,0,0,1-3.986-8.262L66.945,1.923A5.065,5.065,0,0,1,70.931,0Z"
                transform="translate(1288.638 231.638)"
                fill="#dcb854"
              />
              <path
                id="Ligne_33"
                data-name="Ligne 33"
                d="M94.664.2H-5.4A5.6,5.6,0,0,1-11-5.4,5.6,5.6,0,0,1-5.4-11H94.664a5.6,5.6,0,0,1,5.6,5.6A5.6,5.6,0,0,1,94.664.2Z"
                transform="translate(1314.808 344.867)"
                fill="#dcb854"
              />
              <path
                id="Ligne_34"
                data-name="Ligne 34"
                d="M69.649.2H-5.4A5.6,5.6,0,0,1-11-5.4,5.6,5.6,0,0,1-5.4-11H69.649a5.6,5.6,0,0,1,5.6,5.6A5.6,5.6,0,0,1,69.649.2Z"
                transform="translate(1327.666 365.809)"
                fill="#dcb854"
              />
            </g>
          </svg>
        </button>
      )}
    </>
  );
};

export default ReturnTop;
