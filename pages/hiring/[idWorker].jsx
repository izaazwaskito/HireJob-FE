import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import mail from "../../public/mail.svg";
import instragram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import gitlab from "../../public/gitlab.svg";
import styles from "./Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainBackground}>
        <div className="container" style={{ height: "120vh", maxWidth: 1650 }}>
          <div className="row">
            <div className="col-md-3 ">
              <div
                className="col-md-12 mt-5 container"
                style={{
                  height: "110vh",
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="col-md-12 d-flex">
                  <Image
                    src={profile}
                    width={150}
                    height={150}
                    className="mt-3"
                    style={{
                      margin: "auto",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <p className="fw-semibold mb-1" style={{ fontSize: "22px" }}>
                    Louis Tomlinson
                  </p>
                  <p className="mb-2" style={{ fontSize: "14px" }}>
                    Web Developer
                  </p>
                  <p
                    className="mb-2"
                    style={{ fontSize: "14px", color: "#9EA0A5" }}
                  >
                    Purwokerto, Jawa Tengah
                  </p>
                  <p
                    className="mb-2"
                    style={{ fontSize: "14px", color: "#9EA0A5" }}
                  >
                    Freelancer
                  </p>
                  <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                  <div className="col-md-12 mt-5 ">
                    <button
                      className="btn container-fluid fw-semibold"
                      style={{
                        border: "1px solid #5E50A1",
                        color: "#FFF",
                        height: "50px",
                        backgroundColor: "#5E50A1",
                        borderRadius: "4px",
                        margin: "auto",
                      }}
                    >
                      Hire
                    </button>
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <h4>Skill</h4>
                  <div className="d-flex flex-wrap justify-content-between ">
                    <div className={`${styles.flexBox} mb-2`}>PHP</div>
                    <div className={`${styles.flexBox} mb-2`}>JavaScript</div>
                    <div className={`${styles.flexBox} mb-2`}>HTML</div>
                    <div className={`${styles.flexBox} mb-2`}>Python</div>
                    <div className={`${styles.flexBox} mb-2`}>Laravel</div>
                    <div className={`${styles.flexBox} mb-2`}>Golang</div>
                    <div className={`${styles.flexBox} mb-2`}>C++</div>
                    <div className={`${styles.flexBox} mb-2`}>Kotlin</div>
                    <div className={`${styles.flexBox} mb-2`}>Swift</div>
                  </div>
                </div>
                <div className="col-md-12 mt-4 ">
                  <div className="row">
                    <div className="col-md-1 mb-3 text-start">
                      <Image src={mail} />
                    </div>
                    <div className="col-md-11 " style={{ color: "#9EA0A5" }}>
                      Louistommo@gmail.com
                    </div>
                    <div className="col-md-1 mb-3 text-start">
                      <Image src={instragram} />
                    </div>
                    <div className="col-md-11 " style={{ color: "#9EA0A5" }}>
                      @Louist91
                    </div>
                    <div className="col-md-1 mb-3 text-start">
                      <Image src={github} />
                    </div>
                    <div className="col-md-11 " style={{ color: "#9EA0A5" }}>
                      @Louistommo
                    </div>
                    <div className="col-md-1 mb-3 text-start">
                      <Image src={gitlab} />
                    </div>
                    <div className="col-md-11 " style={{ color: "#9EA0A5" }}>
                      @Louistommo91
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 ">ea</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
