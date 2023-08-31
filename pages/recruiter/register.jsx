import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import authphoto from "../../public/authphoto.jpg";
import logo from "../../public/PeworldPutih.png";
import "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    rec_name: "",
    rec_email: "",
    rec_compname: "",
    rec_position: "",
    rec_phone: "",
    rec_password: "",
    rec_confirmpassword: "",
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

  const handleRegisterRecruiter = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/recruiter/register`, data)
        .then((res) => {
          console.log(res.statusText);
          if (res.statusText === "Created") {
            Toast.fire({
              title: "Account Created Success",
              icon: "success",
            }).then((result) => {
              router.push("/recruiter/login");
            });
          } else if (res.statusText === "OK") {
            Toast.fire({
              title: "Account Created Error",
              icon: "error",
            }).then((err) => {
              router.push("/recruiter/register");
            });
          } else {
            console.log("error");
          }
        });
    } catch (err) {}
  };

  return (
    <div className="container" style={{ maxWidth: 1770 }}>
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
            <form onSubmit={handleRegisterRecruiter}>
              <div>
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
                  Nama
                </p>
                <input
                  type="text"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan nama panjang"
                  name="rec_name"
                  value={data.rec_name}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
                <p
                  className="mt-3 mb-0"
                  style={{ color: "#9EA0A5", fontSize: 14 }}
                >
                  Email
                </p>
                <input
                  type="text"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan alamat email"
                  name="rec_email"
                  value={data.rec_email}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
                <p
                  className="mt-3 mb-0"
                  style={{ color: "#9EA0A5", fontSize: 14 }}
                >
                  Perusahaan
                </p>
                <input
                  type="text"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan nama perusahaan"
                  name="rec_compname"
                  value={data.rec_compname}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
                <p
                  className="mt-3 mb-0"
                  style={{ color: "#9EA0A5", fontSize: 14 }}
                >
                  Jabatan
                </p>
                <input
                  type="text"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Posisi di perusahaan Anda
                "
                  name="rec_position"
                  value={data.rec_position}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
                <p
                  className="mt-3 mb-0"
                  style={{ color: "#9EA0A5", fontSize: 14 }}
                >
                  No handphone
                </p>
                <input
                  type="text"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan no handphone"
                  name="rec_phone"
                  value={data.rec_phone}
                  onChange={handleChange}
                  style={{ height: 50 }}
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
                  name="rec_password"
                  value={data.rec_password}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
                <p
                  className="mt-3 mb-0"
                  style={{ color: "#9EA0A5", fontSize: 14 }}
                >
                  Konfirmasi kata sandi
                </p>
                <input
                  type="password"
                  className="form-control container-fluid"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Masukan konfirmasi kata sandi"
                  name="rec_confirmpassword"
                  value={data.rec_confirmpassword}
                  onChange={handleChange}
                  style={{ height: 50 }}
                />
              </div>
              <div>
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
                  Daftar
                </button>
              </div>
            </form>
            <div className="mt-3">
              <p className="text-center">
                Anda sudah punya akun?{" "}
                <Link href={"/recruiter/login"}>
                  <span style={{ color: "#FBB017", display: "inline-block" }}>
                    Masuk disini
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

export default Register;
