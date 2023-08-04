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

const otp = () => {
  const router = useRouter();
  const [data, setData] = useState({
    wrk_email: "",
    wrk_confirmpassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/worker/login`, data)
      .then((res) => {
        console.log(res.data.message);
        if (res.status === 201) {
          Toast.fire({
            icon: "success",
            title: "Login successfully",
          }).then((result) => {
            router.push("/landingpage");
          });
        } else if (res.status === 200) {
          Toast.fire({
            icon: "error",
            title: res.data.message,
          }).then((result) => {
            router.push("/worker/login");
          });
        }
        localStorage.setItem("token_user", res.data.data.token_user);
        localStorage.setItem("wrk_id", res.data.data.wrk_id);
        navigate("/");
      })
      .catch((err) => {});
  };

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
              <h3>Otp</h3>
              <h5>
                Enter your user account's verified email address and we will
                send you a password reset link.
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
                name="wrk_email"
                value={data.wrk_email}
                onChange={handleChange}
              />
              <p
                className="mt-3 mb-0"
                style={{ color: "#9EA0A5", fontSize: 14 }}
              >
                Otp
              </p>
              <input
                type="password"
                className="form-control container-fluid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Masukan OTP"
                name="wrk_confirmpassword"
                value={data.wrk_confirmpassword}
                onChange={handleChange}
                style={{ height: 50 }}
              />
            </div>
            <div>
              <Link href={"/forgetpassword/confirmpassword"}>
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
                  Go To Change Password
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otp;
