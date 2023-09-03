import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import mail from "../../public/mail.svg";
import instragram from "../../public/instagram.svg";
import github from "../../public/github.svg";
import gitlab from "../../public/gitlab.svg";
import styles from "./Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import noimage from "../../public/noimage.png";
import { useRouter } from "next/router";
import defaultprofile from "../../public/defaultprofile.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPortofolioUser } from "../../configs/redux/actions/portofolioAction";
import { getExperienceUser } from "../../configs/redux/actions/experienceAction";
import { getSkillUser } from "../../configs/redux/actions/skillActions";
import Link from "next/link";
import Moment from "react-moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Index = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { portofolioUser } = useSelector((state) => state.portofolio);
  const { experienceUser } = useSelector((state) => state.experience);
  const { skillUser } = useSelector((state) => state.skill);

  useEffect(() => {
    if (router.isReady) {
      isLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/worker/profile/${router.query.id}`)
        .then((response) => {
          setUsers(response.data.data[0]);
          isLoading(false);
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

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainBackgroundSecond}>
        <div
          className={`container ${styles.sideProfile}`}
          style={{ maxWidth: 1650 }}
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

                  <div className="col-md-12 mt-5 ">
                    {loading ? (
                      <Skeleton count={1} height={"50px"} />
                    ) : (
                      <Link href={`/hire/${router.query.id}`}>
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
                        >
                          Hire
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  {loading ? (
                    <Skeleton count={1} height={30} />
                  ) : (
                    <h4>Skill</h4>
                  )}

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
            <div className="col-md-9 pb-4">
              <div
                className="col-md-12 mt-5 pb-3 container"
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="col-md-12 m-1 ">
                  {loading ? (
                    <Skeleton count={1} width={110} height={49} />
                  ) : (
                    <ul className="nav nav-underline">
                      <li className="nav-item">
                        <p
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                          style={{ fontSize: "22px" }}
                        >
                          Portofolio
                        </p>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="col-md-12">
                  {loading ? (
                    <Skeleton
                      count={1}
                      width={"18rem"}
                      height={262}
                      className="m-1"
                    />
                  ) : (
                    <div className="row d-flex justify-content m-1">
                      {portofolioUser.map((item, index) => (
                        <div
                          className="card p-0"
                          style={{ width: "18rem", border: "none" }}
                          key={index}
                        >
                          <Image
                            src={
                              item.por_photo == "null"
                                ? noimage
                                : item.por_photo
                            }
                            alt="photo"
                            className="card-img-top"
                            height={200}
                            width={500}
                            style={{ objectFit: "cover", borderRadius: "4px" }}
                          />
                          <div className="card-body">
                            <p className="card-title text-center fs-5">
                              {item.por_name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-md-12 m-1 ">
                  {loading ? (
                    <Skeleton count={1} width={200} height={49} />
                  ) : (
                    <ul className="nav nav-underline">
                      <li className="nav-item">
                        <p
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                          style={{ fontSize: "22px" }}
                        >
                          Pengalaman Kerja
                        </p>
                      </li>
                    </ul>
                  )}
                </div>
                {loading ? (
                  <Skeleton count={4} height={20} className="mb-1 ms-1" />
                ) : (
                  <div>
                    {experienceUser.map((item, index) => (
                      <div className="col-md-12 border-bottom" key={index}>
                        <p className="m-0 fw-semibold fs-5">
                          {item.exp_position}
                        </p>
                        <p className="m-0">{item.exp_compname}</p>
                        <p className="m-0" style={{ color: "#9EA0A5" }}>
                          <Moment format="DD MMM YYYY" withTitle>
                            {item.exp_datefrom}
                          </Moment>{" "}
                          -{" "}
                          <Moment format="DD MMM YYYY" withTitle>
                            {item.exp_dateuntil}
                          </Moment>{" "}
                          <Moment from={item.exp_datefrom}>
                            {item.exp_dateuntil}
                          </Moment>
                        </p>
                        <p className="mt-1">{item.exp_desc}</p>
                      </div>
                    ))}
                  </div>
                )}
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
