import React from "react";
import logo from "../../public/PeworldPurple.png";
import mail from "../../public/mail.svg";
import bell from "../../public/bell.svg";
import profile from "../../public/profile.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container" style={{ maxWidth: 1650 }}>
          <a className="navbar-brand" href="#">
            <Image src={logo} height={35} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="ms-5">
              <Image src={bell} />
            </div>
            <div className="ms-5">
              <Image src={mail} />
            </div>
            <div className="ms-5">
              {" "}
              <Image
                src={profile}
                height={32}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
