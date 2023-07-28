import React from "react";
import logo1 from "../../public/PeworldPutih.png";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer
        className={styles.footerHeight}
        style={{
          backgroundColor: "#5E50A1",
          position: "relative",
        }}
      >
        <div className="container" style={{ maxWidth: 1650 }}>
          <div className="col-md-12">
            <Image src={logo1} height={35} className="mt-5" />
            <p className="mt-4 mb-5" style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In
              euismod ipsum et dui <br /> rhoncus auctor.
            </p>
          </div>
          <div
            className="col-md-12 col-12 border-top"
            style={{ display: "flex" }}
          >
            <div className="col-md-6 col-9">
              <p className="pt-3" style={{ color: "white" }}>
                2020 Pewworld. All right reserved
              </p>
            </div>
            <div className="col-md-5 col-1 text-end">
              <p className="pt-3" style={{ color: "white" }}>
                Telpon
              </p>
            </div>
            <div className="col-md-1 col-1 col-2 text-end">
              <p className="pt-3" style={{ color: "white" }}>
                Email
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
