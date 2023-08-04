import React, { useEffect, useState } from "react";
import logo from "../../public/PeworldPurple.png";
import mail from "../../public/mail.svg";
import bell from "../../public/bell.svg";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [loginWrk, setLoginWrk] = useState();
  const [loginRec, setLoginRec] = useState();

  useEffect(() => {
    // Perform localStorage action
    const isLoginWrk = localStorage.getItem("wrk_id");
    const isLoginRec = localStorage.getItem("rec_id");
    setLoginWrk(isLoginWrk);
    setLoginRec(isLoginRec);
  }, []);

  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container" style={{ maxWidth: 1650 }}>
          <Link href={`/landingpage`}>
            <Image src={logo} height={35} />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="ms-md-5 ms-4">
            <Image src={bell} />
          </div>
          <div className="ms-md-5 ms-4">
            <Image src={mail} />
          </div>
          <div className="btn-group">
            <div
              className="ms-md-5 ms-4"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <Image
                src={profile}
                height={32}
                style={{ borderRadius: "50%" }}
              />
            </div>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={(e) => {
                    if (loginRec) {
                      router.push(`/editrecruiter/${loginRec}`);
                    } else {
                      router.push(`/editworker/${loginWrk}`);
                    }
                  }}
                  style={{ display: "inline-block" }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={(e) => {
                    localStorage.clear();
                    router.push("/landingpage");
                    setTimeout(function () {
                      window.location.reload();
                    }, 1000);
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
