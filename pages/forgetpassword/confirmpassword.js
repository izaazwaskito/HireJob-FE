import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import authphoto from "../../public/authphoto.jpg";
import logo from "../../public/PeworldPutih.png";
import "../../styles/Home.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const confirmpassword = () => {
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
              alt="sideimage"
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
          className="col-md-6 col-12 "
          style={{ display: "flex", height: "100vh" }}
        >
          <div className="col-md-12" style={{ margin: "auto" }}>
            <div className="mb-5">
              <h3>Reset password</h3>
              <h5>You need to change your password to activate your account</h5>
            </div>
            <div>
              <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
                New password
              </p>
              <input
                type="password"
                className="form-control container-fluid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Masukan kata sandi"
                style={{ height: 50 }}
              />
              <p
                className="mb-0 mt-3"
                style={{ color: "#9EA0A5", fontSize: 14 }}
              >
                Confirmation new password
              </p>
              <input
                type="password"
                className="form-control container-fluid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Masukan konfirmasi kata sandi"
                style={{ height: 50 }}
              />
            </div>
            <div>
              <Link href={"/worker/login"}>
                <button
                  className="container-fluid mt-5"
                  type="submit"
                  style={{
                    backgroundColor: "#FBB017",
                    color: "white",
                    borderRadius: 4,
                    height: 50,
                    border: 0,
                  }}
                >
                  Reset Password
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirmpassword;
