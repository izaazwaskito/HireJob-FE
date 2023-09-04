import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import noimage from "../../public/noimage.png";
import styles from "../hiring/Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import defaultprofile from "../../public/defaultprofile.png";
import axios from "axios";
import { getRecruiterUser } from "../../configs/redux/actions/recruiterAction";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import FormRecruiter from "../../components/Form/FormR";
import ModalEditPhotoRecruiter from "../../components/ModalRecruiter/ModalEditPhotoRecruiter";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EditProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, setLogin] = useState();

  useEffect(() => {
    if (router.isReady) {
      const isLogin = localStorage.getItem("wrk_id");
      setLogin(isLogin);
    }
  }, [router.isReady]);

  //GET USERS LOGIN
  const { recruiterUser } = useSelector((state) => state.recruiter);
  useEffect(() => {
    if (router.isReady) {
      const isLogin = localStorage.getItem("rec_id");
      dispatch(getRecruiterUser(isLogin));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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
  const [rec, setRec] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/hire/recruiter/${router.query.id}`)
        .then((response) => {
          setRec(response.data.data);
        })
        .catch((error) => console.log(error));
      console.log(router.query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainBackgroundSecondEdit}>
        <div
          className={`container`}
          style={{
            maxWidth: 1650,
          }}
        >
          <div className="row">
            <div className="col-md-3">
              <div
                className="col-md-12 mt-5 container pb-3"
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                {recruiterUser.map((item) => (
                  <div key={item.rec_id}>
                    <div className="col-md-12 d-flex">
                      <Image
                        src={
                          item.rec_photo == "null" || item.rec_photo == null
                            ? defaultprofile
                            : item.rec_photo
                        }
                        width={150}
                        height={150}
                        className="mt-3"
                        style={{
                          margin: "auto",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        alt="photo"
                      />
                    </div>
                    <div className="col-md-12 d-flex">
                      <ModalEditPhotoRecruiter rec_id={item.rec_id} />
                    </div>
                  </div>
                ))}
                <div className="col-md-12 mt-4">
                  {recruiterUser.map((item) => (
                    <div key={item.rec_id}>
                      <p
                        className="fw-semibold mb-1"
                        style={{ fontSize: "22px" }}
                      >
                        {item.rec_name}
                      </p>
                      <p className="mb-2" style={{ fontSize: "16px" }}></p>
                      <p
                        className="mb-2"
                        style={{ fontSize: "14px", color: "#9EA0A5" }}
                      >
                        {item.rec_position}
                      </p>
                      <p
                        className="mb-2"
                        style={{ fontSize: "14px", color: "#9EA0A5" }}
                      >
                        {item.rec_compname}
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
                          onClick={(e) => {
                            Toast.fire({
                              title: "Saved Account Success",
                              icon: "success",
                            });
                          }}
                        >
                          Simpan
                        </button>
                      </div>
                      <button
                        className="btn container-fluid fw-semibold mt-3"
                        style={{
                          border: "1px solid #5E50A1",
                          color: "#5E50A1",
                          height: "50px",
                          backgroundColor: "#FFF",
                          borderRadius: "4px",
                          margin: "auto",
                        }}
                        onClick={(e) => {
                          Toast.fire({
                            title: "Saved Account Cancel",
                            icon: "error",
                          }).then((result) => {
                            router.push("/landingpage");
                          });
                        }}
                      >
                        Batal
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9 pb-4">
              <div
                className={`col-md-12 mt-5 container pb-3`}
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  <div className="col-md-12 border-bottom pt-3">
                    <p className="fw-semibold fs-4">Data diri</p>
                  </div>
                  {recruiterUser.map((item) => (
                    <div className="col-md-12 mt-3" key={item.rec_id}>
                      <p
                        className="mb-0"
                        style={{ color: "#9EA0A5", fontSize: 14 }}
                      >
                        Nama perusahaan
                      </p>
                      <input
                        type="text"
                        className="form-control container-fluid"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Masukan nama lengkap"
                        value={item.rec_compname}
                        name="rec_compname"
                        style={{ height: 50 }}
                      />
                      <p
                        className="mb-0 mt-3"
                        style={{ color: "#9EA0A5", fontSize: 14 }}
                      >
                        Email
                      </p>
                      <input
                        type="text"
                        className="form-control container-fluid"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Masukan email"
                        value={item.rec_email}
                        style={{ height: 50 }}
                      />
                      <p
                        className="mb-0 mt-3"
                        style={{ color: "#9EA0A5", fontSize: 14 }}
                      >
                        Nomor Telepon
                      </p>
                      <input
                        type="text"
                        className="form-control container-fluid"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Masukan nomor nelepon"
                        value={item.rec_phone}
                        name="rec_phone"
                        style={{ height: 50 }}
                      />
                      <FormRecruiter
                        rec_jobfield={item.rec_jobfield}
                        rec_province={item.rec_province}
                        rec_city={item.rec_city}
                        rec_desc={item.rec_desc}
                        rec_emailcomp={item.rec_emailcomp}
                        rec_linkedin={item.rec_linkedin}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="col-md-12 mt-5 container pb-3"
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  <div className="col-md-12 border-bottom pt-3">
                    <p className="fw-semibold fs-4">Offering</p>
                  </div>
                  <div className="col-md-12 mt-3 d-flex flex-wrap">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <p>Name</p>
                        </div>
                        <div className="col-md-3">
                          <p>Job Desk</p>
                        </div>
                        <div className="col-md-5">
                          <p>Job Description</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3 d-flex flex-wrap">
                    {rec.map((item) => (
                      <div className="col-md-12" key={item.hire_id}>
                        <div className="row">
                          <div className="col-md-4">
                            <p>{item.wrk_name}</p>
                          </div>
                          <div className="col-md-3">
                            <p>{item.hire_title}</p>
                          </div>
                          <div className="col-md-5">
                            <p>{item.hire_desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default EditProfile;
