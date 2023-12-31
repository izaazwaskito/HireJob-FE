import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import mail from "../../public/mail.svg";
import instragram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import gitlab from "../../public/gitlab.svg";
import styles from "../hiring/Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import noimage from "../../public/noimage.png";
import defaultprofile from "../../public/defaultprofile.png";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPortofolioUser } from "../../configs/redux/actions/portofolioAction";
import { getExperienceUser } from "../../configs/redux/actions/experienceAction";
import { getSkillUser } from "../../configs/redux/actions/skillActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Swal from "sweetalert2";

const Index = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [rec, setRec] = useState([]);
  const dispatch = useDispatch();
  const { portofolioUser } = useSelector((state) => state.portofolio);
  const { experienceUser } = useSelector((state) => state.experience);
  const [recruiter, getRecruiter] = useState([]);
  const { skillUser } = useSelector((state) => state.skill);

  useEffect(() => {
    isLoading(true);
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/worker/profile/${router.query.id}`)
        .then((response) => {
          isLoading(false);
          setUsers(response.data.data[0]);
        })
        .catch((error) => console.log(error));
      console.log(router.query);
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

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/recruiter/profile/${recruiter}`)
        .then((response) => {
          console.log(response.data.data[0].rec_compname);
          setRec(response.data.data[0].rec_compname);
        })
        .catch((error) => console.log(error));
      console.log(router.query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getPortofolioUser(isLogin));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const setRecruiter = localStorage.getItem("rec_id");
      getRecruiter(setRecruiter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getExperienceUser(isLogin));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getSkillUser(isLogin));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  const [loading, isLoading] = useState(false);

  const [data, setData] = useState({
    hire_title: "",
    hire_desc: "",
    wrk_id: "",
    wrk_name: "",
    wrk_email: "",
    rec_id: "",
    rec_compname: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitHire = (e) => {
    e.preventDefault();
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API}/hire`, data).then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Congratulations! Your account has been successfully created. Please check your email for further instructions",
            icon: "success",
          }).then((result) => {
            window.location.reload();
          });
        }
      });
    } catch (err) {}
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainBackground}>
        <div
          className={`container`}
          style={{ maxWidth: 1650, paddingBottom: 136 }}
        >
          <div className="row">
            <div className="col-md-3 ">
              <div
                className="col-md-12 mt-5 container"
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                {loading ? (
                  <div className="d-flex">
                    <Skeleton
                      circle
                      count={1}
                      width={150}
                      height={150}
                      className="mt-3"
                      style={{ marginLeft: 107 }}
                    />
                  </div>
                ) : (
                  <div className="col-md-12 d-flex">
                    <Image
                      src={
                        users.wrk_photo == "null" || users.wrk_photo == null
                          ? defaultprofile
                          : users.wrk_photo
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
                )}

                <div className="col-md-12 mt-4">
                  {loading ? (
                    <Skeleton count={3} height={23} className="mb-2" />
                  ) : (
                    <div>
                      <p
                        className="fw-semibold mb-1"
                        style={{ fontSize: "22px" }}
                      >
                        {users.wrk_name}
                      </p>
                      <p className="mb-2" style={{ fontSize: "17px" }}>
                        {users.wrk_jobdesk}
                      </p>
                      <p
                        className="mb-2"
                        style={{ fontSize: "14px", color: "#9EA0A5" }}
                      >
                        {users.wrk_dom}
                      </p>
                    </div>
                  )}
                  {loading ? (
                    <Skeleton count={1} height={100} />
                  ) : (
                    <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                      {users.wrk_desc}
                    </p>
                  )}
                </div>
                {loading ? (
                  <Skeleton count={1} height={120} className="mt-4" />
                ) : (
                  <div className="col-md-12 mt-4">
                    <h4>Skill</h4>
                    {loading ? (
                      <Skeleton count={1} height={90} />
                    ) : (
                      <div className="d-flex flex-wrap ">
                        {skillUser.map((item, index) => (
                          <div
                            className={`ps-2 pe-2 mb-2  ${styles.flexBox}`}
                            key={index}
                          >
                            {item.skill_name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="col-md-12 mt-4 ">
                  {loading ? (
                    <Skeleton count={4} className="mb-2" height={30} />
                  ) : (
                    <div className="row">
                      <div className="col-md-1 col-1 mb-3 text-start">
                        <Image src={mail} alt="mail" />
                      </div>
                      <div
                        className="col-md-11 col-11 "
                        style={{ color: "#9EA0A5" }}
                      >
                        {users.wrk_email}
                      </div>
                      <div className="col-md-1 col-1 mb-3 text-start">
                        <Image src={instragram} alt="instagram" />
                      </div>
                      <div
                        className="col-md-11 col-11 "
                        style={{ color: "#9EA0A5" }}
                      >
                        @{users.wrk_name}
                      </div>
                      <div className="col-md-1 col-1 mb-3 text-start">
                        <Image src={github} alt="github" />
                      </div>
                      <div
                        className="col-md-11 col-11 "
                        style={{ color: "#9EA0A5" }}
                      >
                        @{users.wrk_name}
                      </div>
                      <div className="col-md-1 col-1 mb-3 text-start">
                        <Image src={gitlab} alt="gitlab" />
                      </div>
                      <div
                        className="col-md-11 col-11 "
                        style={{ color: "#9EA0A5" }}
                      >
                        @{users.wrk_name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-9 ">
              <div
                className="col-md-12 mt-5 pb-3 container"
                style={{
                  borderRadius: "8px",
                }}
              >
                <div className="col-md-12 m-1">
                  {loading ? (
                    <Skeleton count={1} height={40} className="mb-3" />
                  ) : (
                    <p
                      className="nav-link active fw-semibold"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "32px" }}
                    >
                      Hubungi {users.wrk_name}
                    </p>
                  )}

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
                <form onSubmit={handleSubmitHire}>
                  <div className="col-md-12">
                    <p
                      className="mb-0 mt-5"
                      style={{ color: "#9EA0A5", fontSize: 14 }}
                    >
                      Job desk
                    </p>
                    <input
                      type="text"
                      className="form-control container-fluid"
                      aria-label="Sizing example input"
                      name="hire_title"
                      value={data.hire_title}
                      onChange={handleChange}
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Masukan job desk"
                      style={{ height: 50 }}
                    />
                    <p
                      className="mb-0 mt-3"
                      style={{ color: "#9EA0A5", fontSize: 14 }}
                    >
                      Job Description
                    </p>
                    <textarea
                      class="form-control"
                      name="hire_desc"
                      value={data.hire_desc}
                      onChange={handleChange}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Tuliskan deskripsi singkat"
                    ></textarea>
                    <input
                      type="hidden"
                      name="wrk_id"
                      value={(data.wrk_id = router.query.id)}
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="rec_id"
                      value={(data.rec_id = recruiter)}
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="wrk_name"
                      value={(data.wrk_name = users.wrk_name)}
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="wrk_email"
                      value={(data.wrk_email = users.wrk_email)}
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="rec_compname"
                      value={(data.rec_compname = rec)}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12 mt-5 ">
                    <button
                      className="btn container-fluid fw-semibold"
                      type="submit"
                      style={{
                        border: "1px solid #FBB017",
                        color: "#FFF",
                        height: "50px",
                        backgroundColor: "#FBB017",
                        borderRadius: "4px",
                        margin: "auto",
                      }}
                    >
                      Hire
                    </button>
                  </div>
                </form>
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
