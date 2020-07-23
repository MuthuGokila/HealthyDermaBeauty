import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pdf from "../editable-stuff/certificate.pdf";
import { showBlog, FirstName } from "../editable-stuff/configurations.json";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);
  

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
      } `}
    >
      <a style={{fontFamily:"forte", color: "maroon", }} font-weight=" bold"  className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`♥${"Muthu Gokila"}♥`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
            <b  style={{color: "block", fontWeight:'bold', fontFamily:'broadway'}}  >Our Work</b>  
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b style={{color: "block", fontWeight:'bold', fontFamily:'broadway'}} >Certificate</b>
            </a>
          </li>

          {showBlog && (
            <li className="nav-item">
              <Link
                className="nav-link lead"
                to={process.env.PUBLIC_URL + "/blog"}
              >
               <b  style={{font:"Arial",color: "black", }} >Contacts</b>  
              </Link>
            </li>
          )}
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b style={{color: "block", fontWeight:'bold', fontFamily:'broadway'}} >About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;