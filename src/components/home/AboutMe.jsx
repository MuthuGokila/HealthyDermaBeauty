import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/certificate.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div  id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div  className="row">
          {showInsta && (
            <div  className="col-5 d-none d-lg-block align-self-center">
             
            </div>
          )}
          <div style={{textAlign:'center', color:'black', fontWeight:'bold'}}className={`col-lg-${showInsta ? "7" : "12"}`}>
            <h1 style={{textAlign:'center', fontWeight:'bold'}}className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
           
            {resumeURL && (
              <p className="lead text-center">
                <a
                style={{textAlign:'center', background:'black',color:'white', fontWeight:'bold'}}
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                  >
                  
                  Certificate
                </a>
              </p>
            )}
            <p href="https://gmail.com" className="fa fa-envelope-square" style={{color:'red'}}> { "Reach me at healthydermabeauty@gmail.com"}</p>

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
