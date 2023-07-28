import React, { useEffect, useState } from "react";
import logo from "../../public/PeworldPurple.png";
import mail from "../../public/mail.svg";
import bell from "../../public/bell.svg";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    // Perform localStorage action
    const isLogin = localStorage.getItem("wrk_id");
    setLogin(isLogin);
  }, []);
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container" style={{ maxWidth: 1650 }}>
          <a className="navbar-brand" href="#">
            <Image src={logo} height={35} />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="ms-md-5 ms-4">
            <Image src={bell} />
          </div>
          <div className="ms-md-5 ms-4">
            <Image src={mail} />
          </div>
          <Link href={`/editworker/${login}`}>
            <div className="ms-md-5 ms-4">
              {" "}
              <Image
                src={profile}
                height={32}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
