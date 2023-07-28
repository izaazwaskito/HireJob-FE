import React from "react";
import logo from "../../public/PeworldPurple.png";
import Image from "next/image";
import Link from "next/link";

const NavbarLogin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
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
            <Link href={"/worker/login"}>
              <button
                className="btn fw-semibold"
                style={{
                  border: "1px solid #5E50A1",
                  color: "#5E50A1",
                  marginRight: 16,
                  height: "44px",
                }}
              >
                Masuk Untuk Pekerja
              </button>
            </Link>
            <button
              className="btn fw-semibold"
              style={{
                border: "1px solid #5E50A1",
                color: "#FFF",
                backgroundColor: "#5E50A1",
                height: "44px",
              }}
            >
              Masuk Untuk Perekrut
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogin;
