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

const Login = () => {
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container" style={{ maxWidth: 1766 }}>
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
              alt="photo"
            />
            <div style={{ position: "absolute", top: 44, left: 44 }}>
              <Image src={logo} style={{ width: 86, height: 24 }} alt="logo" />
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
              <h3>Halo, Pewpeople</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h5>
            </div>
            <form onSubmit={handleLogin}>
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
                  Kata Sandi
                </p>
                <input
                  type="password"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan kata sandi"
                  name="wrk_confirmpassword"
                  value={data.wrk_confirmpassword}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
              </div>
              <Link href={"/forgetpassword"}>
                <div className="mt-3">
                  <p className="text-end" style={{ color: "black" }}>
                    Lupa kata sandi?
                  </p>
                </div>
              </Link>
              <div>
                <button
                  className="container-fluid mt-3"
                  type="submit"
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
            </form>
            <div className="mt-3">
              <p className="text-center">
                Anda belum punya akun?{" "}
                <Link href={"/worker/register"}>
                  <span style={{ color: "#FBB017", display: "inline-block" }}>
                    Daftar disini
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
