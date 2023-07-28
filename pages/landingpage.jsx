import React, { useEffect, useState } from "react";
import imagelist from "../public/Group 1195.png";
import imagelist2 from "../public/Group 1194.png";
import imagelist3 from "../public/Group 1196.png";
import profilpic1 from "../public/profilpic1.png";
import Image from "next/image";
import styles from "../styles/Landing.module.css";
import NavbarLogin from "../components/Navbar/NavbarLogin";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

const landingpage = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    // Perform localStorage action
    const isLogin = localStorage.getItem("token_user");
    setLogin(isLogin);
  }, []);

  if (!login) {
    return (
      <div>
        <header>
          <NavbarLogin />
        </header>
        <main>
          <div className="container" style={{ maxWidth: 1650 }}>
            <section>
              <div
                className={`row flex-column-reverse flex-md-row justify-content-evenly ${styles.landingHeightF}`}
              >
                <div className="col-md-6 col-12 " style={{ display: "flex" }}>
                  <div className="col-md-12 " style={{ margin: "auto" }}>
                    <h2 style={{ lineHeight: "50px" }}>
                      Talenta terbaik negri
                      <br />
                      untuk perubahan <br />
                      revolusi 4.0
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                    <button
                      className="btn"
                      style={{
                        border: "1px solid #5E50A1",
                        color: "#FFF",
                        height: "55px",
                        backgroundColor: "#5E50A1",
                        borderRadius: "4px",
                      }}
                    >
                      Mulai Dari Sekarang
                    </button>
                  </div>
                </div>
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      marginTop: 110,
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
              </div>
            </section>
            <section>
              <div
                className={`row flex-column flex-md-row justify-content-evenly ${styles.landingHeight}`}
              >
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist2}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      marginLeft: 0,
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
                <div className="col-md-6 col-12" style={{ display: "flex" }}>
                  <div className="row">
                    <div className="col-md-12" style={{ margin: "auto" }}>
                      <h2
                        className={styles.listImage}
                        style={{ lineHeight: "50px" }}
                      >
                        Kenapa harus mencari tallent <br />
                        di peworld
                      </h2>
                      <ul
                        className={styles.ul}
                        style={{ lineHeight: 3, paddingLeft: 30 }}
                      >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div
                className={`row flex-column-reverse flex-md-row justify-content-evenly ${styles.landingHeight}`}
              >
                <div className="col-md-6 col-12" style={{ display: "flex" }}>
                  <div className="row">
                    <div className={`col-md-12 ${styles.marFlex}`}>
                      <h2
                        className={styles.listImage}
                        style={{ lineHeight: "50px" }}
                      >
                        Skill Tallent
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In <br />
                        euismod ipsum et dui rhoncus auctor.
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <ul
                            className={styles.ul}
                            style={{ lineHeight: 3, paddingLeft: 30 }}
                          >
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-6">
                          <ul className={styles.ul} style={{ lineHeight: 3 }}>
                            <li>Golang</li>
                            <li>C++</li>
                            <li>Ruby</li>
                            <li>10+ Bahasa lainnya</li>
                          </ul>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist3}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
              </div>
            </section>
            <section>
              <div className={`row mb-5`}>
                <div className="col-md-12 col-12 " style={{ display: "flex" }}>
                  <div className="col-md-12">
                    <h2 className="text-center" style={{ lineHeight: "50px" }}>
                      Their opinion about peworld
                    </h2>
                    <div
                      id="carouselExampleAutoplaying"
                      className="carousel slide mt-5"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          style={{ display: "flex" }}
                        >
                          <div className="row" style={{ margin: "auto" }}>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  margin: "auto",
                                  height: "40vh",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Harry Styles
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                    <br /> adipiscing elit. In <br />
                                    euismod ipsum et dui
                                    <br /> rhoncus auctor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  margin: "auto",
                                  height: "40vh",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Niall Horan
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                    <br /> adipiscing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  height: "40vh",
                                  margin: "auto",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Louis Tomlinson
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="carousel-item"></div>
                        <div className="carousel-item"></div> */}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div
                className="col-md-12 mb-5 border"
                style={{
                  height: "20vh",
                  borderRadius: "40px 8px",
                  backgroundColor: "#5E50A1",
                  display: "flex",
                }}
              >
                <div className={`col-md-6 ${styles.bfooterl}`}>
                  <h1 style={{ color: "white" }}>
                    Lorem ipsum <br />
                    dolor sit amet
                  </h1>
                </div>
                <div className={`col-md-6 ${styles.bfooterr}`}>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      color: "#796EAF",
                      height: "55px",
                    }}
                  >
                    Mulai Dari Sekarang
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="container" style={{ maxWidth: 1650 }}>
            <section>
              <div
                className={`row flex-column-reverse flex-md-row justify-content-evenly ${styles.landingHeightF}`}
              >
                <div className="col-md-6 col-12 " style={{ display: "flex" }}>
                  <div className="col-md-12 " style={{ margin: "auto" }}>
                    <h2 style={{ lineHeight: "50px" }}>
                      Talenta terbaik negri
                      <br />
                      untuk perubahan <br />
                      revolusi 4.0
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                    <Link href={"/hiring"}>
                      <button
                        className="btn"
                        style={{
                          border: "1px solid #5E50A1",
                          color: "#FFF",
                          height: "55px",
                          backgroundColor: "#5E50A1",
                          borderRadius: "4px",
                        }}
                      >
                        Mulai Dari Sekarang
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      marginTop: 110,
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
              </div>
            </section>
            <section>
              <div
                className={`row flex-column flex-md-row justify-content-evenly ${styles.landingHeight}`}
              >
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist2}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      marginLeft: 0,
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
                <div className="col-md-6 col-12" style={{ display: "flex" }}>
                  <div className="row">
                    <div className="col-md-12" style={{ margin: "auto" }}>
                      <h2
                        className={styles.listImage}
                        style={{ lineHeight: "50px" }}
                      >
                        Kenapa harus mencari tallent <br />
                        di peworld
                      </h2>
                      <ul
                        className={styles.ul}
                        style={{ lineHeight: 3, paddingLeft: 30 }}
                      >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div
                className={`row flex-column-reverse flex-md-row justify-content-evenly ${styles.landingHeight}`}
              >
                <div className="col-md-6 col-12" style={{ display: "flex" }}>
                  <div className="row">
                    <div className={`col-md-12 ${styles.marFlex}`}>
                      <h2
                        className={styles.listImage}
                        style={{ lineHeight: "50px" }}
                      >
                        Skill Tallent
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In <br />
                        euismod ipsum et dui rhoncus auctor.
                      </p>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <ul
                            className={styles.ul}
                            style={{ lineHeight: 3, paddingLeft: 30 }}
                          >
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>PHP</li>
                            <li>JavaScript</li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-6">
                          <ul className={styles.ul} style={{ lineHeight: 3 }}>
                            <li>Golang</li>
                            <li>C++</li>
                            <li>Ruby</li>
                            <li>10+ Bahasa lainnya</li>
                          </ul>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  relative" style={{ display: "flex" }}>
                  <Image
                    src={imagelist3}
                    layout="intrinsic"
                    style={{
                      margin: "auto",
                      width: "400",
                      height: "400",
                    }}
                  />
                </div>
              </div>
            </section>
            <section>
              <div className={`row mb-5`}>
                <div className="col-md-12 col-12 " style={{ display: "flex" }}>
                  <div className="col-md-12">
                    <h2 className="text-center" style={{ lineHeight: "50px" }}>
                      Their opinion about peworld
                    </h2>
                    <div
                      id="carouselExampleAutoplaying"
                      className="carousel slide mt-5"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          style={{ display: "flex" }}
                        >
                          <div className="row" style={{ margin: "auto" }}>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  margin: "auto",
                                  height: "40vh",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Harry Styles
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                    <br /> adipiscing elit. In <br />
                                    euismod ipsum et dui
                                    <br /> rhoncus auctor.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  margin: "auto",
                                  height: "40vh",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Niall Horan
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                    <br /> adipiscing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-4 mb-3"
                              style={{ display: "flex" }}
                            >
                              <div
                                className="card"
                                style={{
                                  width: "18rem",
                                  height: "40vh",
                                  margin: "auto",
                                }}
                              >
                                <Image
                                  src={profilpic1}
                                  width={120}
                                  height={120}
                                  className="mt-3"
                                  style={{ margin: "auto" }}
                                />
                                <div className="card-body">
                                  <h5 className="card-title text-center">
                                    Louis Tomlinson
                                  </h5>
                                  <p className="text-center">Web Developer</p>
                                  <p className="card-text text-center">
                                    Lorem ipsum dolor sit <br /> amet,
                                    consectetur
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="carousel-item"></div>
                        <div className="carousel-item"></div> */}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div
                className="col-md-12 mb-5 border"
                style={{
                  height: "20vh",
                  borderRadius: "40px 8px",
                  backgroundColor: "#5E50A1",
                  display: "flex",
                }}
              >
                <div className={`col-md-6 ${styles.bfooterl}`}>
                  <h1 style={{ color: "white" }}>
                    Lorem ipsum <br />
                    dolor sit amet
                  </h1>
                </div>
                <div className={`col-md-6 ${styles.bfooterr}`}>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      color: "#796EAF",
                      height: "55px",
                    }}
                  >
                    Mulai Dari Sekarang
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

export default landingpage;
