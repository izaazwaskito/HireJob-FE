import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import styles from "./Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <>
      <header>
        <Navbar />
        <nav className="navbar" style={{ backgroundColor: "#5E50A1" }}>
          <div className="container" style={{ maxWidth: 1650 }}>
            <a className="navbar-brand text-light fw-semibold">Top Jobs</a>
          </div>
        </nav>
      </header>
      <main className={styles.mainBackground}>
        <div className="container" style={{ height: "100vh", maxWidth: 1650 }}>
          <div className="input-group mb-3 mt-5">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option selected>Sort</option>
              <option value="1">Sort by Name</option>
              <option value="2">Sort by Skills</option>
              <option value="3">Sort by Address</option>
            </select>
            <button
              className="btn"
              style={{
                border: "1px solid #5E50A1",
                color: "#FFF",
                height: "55px",
                width: "120px",
                backgroundColor: "#5E50A1",
                borderRadius: "4px",
                margin: "auto",
              }}
            >
              Search
            </button>
          </div>
          <div style={{ height: "80vh", backgroundColor: "white" }}>
            <div className="container" style={{ maxWidth: 1650 }}>
              <div className="row mt-5">
                <div className="col-md-12  border-bottom">
                  <div className="row mt-4 mb-3">
                    <div className="col-md-2 col-12  d-flex">
                      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <Image
                          src={profile}
                          width={145}
                          height={145}
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 col-12 ">
                      <p className="mb-1 fw-semibold">Louis Tomlinson</p>
                      <p className="mb-1" style={{ color: "#9EA0A5" }}>
                        Web developer
                      </p>
                      <p className="mb-3" style={{ color: "#9EA0A5" }}>
                        Semarang
                      </p>
                      <div className="d-flex">
                        <div className={styles.flexBox}>
                          <p>PHP</p>
                        </div>
                        <div className={styles.flexBox}>JavaScript</div>
                        <div className={styles.flexBox}>HTML</div>
                      </div>
                    </div>
                    <div className="col-md-2 col-12 d-flex">
                      <button
                        className="btn"
                        style={{
                          border: "1px solid #5E50A1",
                          color: "#FFF",
                          height: "55px",
                          width: "150px",
                          backgroundColor: "#5E50A1",
                          borderRadius: "4px",
                          margin: "auto",
                        }}
                      >
                        Lihat Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
