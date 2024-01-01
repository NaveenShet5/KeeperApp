import React from "react";

function Footer() {
  const date = new Date();
  let curentYear = date.getFullYear();

  return (
    <div className="footer">
      <footer>
        <p>Copyright © {curentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
