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
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPortofolioUser } from "../../configs/redux/actions/portofolioAction";
import { getExperienceUser } from "../../configs/redux/actions/experienceAction";
import { getSkillUser } from "../../configs/redux/actions/skillActions";

const Index = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { portofolioUser } = useSelector((state) => state.portofolio);
  const { experienceUser } = useSelector((state) => state.experience);
  const { skillUser } = useSelector((state) => state.skill);

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:7474/worker/profile/${router.query.id}`)
        .then((response) => {
          setUsers(response.data.data[0]);
        })
        .catch((error) => console.log(error));
      console.log(router.query);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getPortofolioUser(isLogin));
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getExperienceUser(isLogin));
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      const isLogin = router.query.id;
      dispatch(getSkillUser(isLogin));
    }
  }, [router.isReady]);

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
                    {users.wrk_name}
                  </p>
                  <p className="mb-2" style={{ fontSize: "17px" }}>
                    {users.wrk_jobdesk}
                  </p>
                  <p className="mb-2" style={{ fontSize: "14px" }}>
                    {users.wrk_place}
                  </p>
                  <p
                    className="mb-2"
                    style={{ fontSize: "14px", color: "#9EA0A5" }}
                  >
                    {users.wdom}
                  </p>
                  <p style={{ fontSize: "14px", color: "#9EA0A5" }}>
                    {users.wrk_desc}
                  </p>
                </div>
                <div className="col-md-12 mt-4">
                  <h4>Skill</h4>
                  <div className="d-flex flex-wrap ">
                    {skillUser.map((item) => (
                      <div className={`ps-2 pe-2 mb-2  ${styles.flexBox}`}>
                        {item.skill_name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-12 mt-4 ">
                  <div className="row">
                    <div className="col-md-1 col-1 mb-3 text-start">
                      <Image src={mail} />
                    </div>
                    <div
                      className="col-md-11 col-11 "
                      style={{ color: "#9EA0A5" }}
                    >
                      {users.wrk_email}
                    </div>
                    <div className="col-md-1 col-1 mb-3 text-start">
                      <Image src={instragram} />
                    </div>
                    <div
                      className="col-md-11 col-11 "
                      style={{ color: "#9EA0A5" }}
                    >
                      @{users.wrk_name}
                    </div>
                    <div className="col-md-1 col-1 mb-3 text-start">
                      <Image src={github} />
                    </div>
                    <div
                      className="col-md-11 col-11 "
                      style={{ color: "#9EA0A5" }}
                    >
                      @{users.wrk_name}
                    </div>
                    <div className="col-md-1 col-1 mb-3 text-start">
                      <Image src={gitlab} />
                    </div>
                    <div
                      className="col-md-11 col-11 "
                      style={{ color: "#9EA0A5" }}
                    >
                      @{users.wrk_name}
                    </div>
                  </div>
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
                  <p
                    className="nav-link active fw-semibold"
                    aria-current="page"
                    href="#"
                    style={{ fontSize: "32px" }}
                  >
                    Hubungi {users.wrk_name}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
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
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Masukan job desk"
                    style={{ height: 50 }}
                  />
                  <p
                    className="mb-0 mt-3"
                    style={{ color: "#9EA0A5", fontSize: 14 }}
                  >
                    Job desk
                  </p>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Tuliskan deskripsi singkat"
                  ></textarea>
                </div>
                <div className="col-md-12 mt-5 ">
                  <button
                    className="btn container-fluid fw-semibold"
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
