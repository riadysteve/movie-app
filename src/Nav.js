import React, { useEffect } from "react";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__scrolled"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        alt="Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
