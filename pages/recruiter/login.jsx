import React from "react";
import Head from "next/head";
import Image from "next/image";
import authphoto from "../../public/authphoto.jpg";
import logo from "../../public/PeworldPutih.png";
import "../../styles/Home.module.css";

const login = () => {
  return (
    <div className="container" style={{ maxWidth: 1766 }}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-md-6 height-side" style={{ display: "flex" }}>
          <div
            style={{
              margin: "auto",
              background: "#5E50A1",
              overflow: "hidden",
              position: "relative",
            }}
            className="d-none d-sm-block"
          >
            <Image
              src={authphoto}
              style={{
                height: 900,
                width: 900,
                objectFit: "cover",
                opacity: "0.2",
              }}
            />
            <div style={{ position: "absolute", top: 44, left: 44 }}>
              <Image src={logo} style={{ width: 86, height: 24 }} />
            </div>
            <div
              style={{
                position: "absolute",
                top: 246,
                left: 65,
                color: "white",
                fontSize: 44,
                fontWeight: 700,
              }}
            >
              Temukan developer
              <br />
              berbakat &amp; terbaik
              <br /> di berbagai bidang <br /> keahlian
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-12"
          style={{ display: "flex", height: "100vh" }}
        >
          <div className="col-md-12" style={{ margin: "auto" }}>
            <div className="mb-5">
              <h3>Halo, Pewpeople</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h5>
            </div>
            <div>
              <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
                Email
              </p>
              <input
                type="text"
                className="form-control container-fluid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Masukan alamat email"
                style={{ height: 50 }}
              />
              <p
                className="mt-3 mb-0"
                style={{ color: "#9EA0A5", fontSize: 14 }}
              >
                Kata Sandi
              </p>
              <input
                type="text"
                className="form-control container-fluid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Masukan kata sandi"
                style={{ height: 50 }}
              />
            </div>
            <div className="mt-3">
              <p className="text-end">Lupa kata sandi?</p>
            </div>
            <div>
              <button
                className="container-fluid mt-3"
                style={{
                  backgroundColor: "#FBB017",
                  color: "white",
                  borderRadius: 4,
                  height: 50,
                  border: 0,
                }}
              >
                Masuk
              </button>
            </div>
            <div className="mt-3">
              <p className="text-center">
                Anda belum punya akun? Daftar disini
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
