import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
    
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/MuthuGokila"
        aria-label="My GitHub"
      >
        
      </a>{" "}

      <p>
        <small className="text-muted">
          {" "}
          Thanks Hashir Shoaib for the reference.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
