import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import noimage from "../../public/noimage.png";
import defaultprofile from "../../public/defaultprofile.png";
import styles from "../hiring/Hiring.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  createExperience,
  getExperienceUser,
} from "../../configs/redux/actions/experienceAction";
import { useRouter } from "next/router";
import ModalEdit from "../../components/ModalExperience/ModalEdit";
import ModalDelete from "../../components/ModalExperience/ModalDelete";
import {
  createPortofolio,
  getPortofolioUser,
} from "../../configs/redux/actions/portofolioAction";
import ModalEditPorto from "../../components/ModalPortofolio/ModalEditPorto";
import ModalDeletePorto from "../../components/ModalPortofolio/ModalDeletePorto";
import {
  createSkill,
  deleteSkill,
  getSkillUser,
} from "../../configs/redux/actions/skillActions";
import {
  editWorker,
  getWorkerUser,
} from "../../configs/redux/actions/workerAction";
import Form from "../../components/Form/Form";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import ModalEditPhotoWorker from "../../components/ModalWorker/ModalEditPhotoWorker";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EditProfile = () => {
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

  const [login, setLogin] = useState();
  const [data, setData] = useState({
    exp_position: "",
    exp_compname: "",
    exp_datefrom: "",
    exp_dateuntil: "",
    exp_desc: "",
    wrk_id: "",
  });
  const [porto, setPorto] = useState({
    por_name: "",
    por_repository: "",
    wrk_id: "",
  });

  const [skill, setSkill] = useState({
    skill_name: "",
    wrk_id: login,
  });
  const [photo, setPhoto] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const isLogin = localStorage.getItem("wrk_id");
      setLogin(isLogin);
    }
  }, [router.isReady]);

  //WORKER
  const { workerUser } = useSelector((state) => state.worker);
  useEffect(() => {
    isLoading(true);
    if (router.isReady) {
      const isLogin = localStorage.getItem("wrk_id");
      dispatch(getWorkerUser(isLogin)).then((res) => {
        isLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  //EXPERIENCE
  const dispatch = useDispatch();
  const { experienceUser } = useSelector((state) => state.experience);
  useEffect(() => {
    const isLogin = localStorage.getItem("wrk_id");
    dispatch(getExperienceUser(isLogin));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateExperience = (e) => {
    dispatch(createExperience(data));
    console.log(login);
  };

  const handleChangeExperience = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //PORTOFOLIO
  const { portofolioUser } = useSelector((state) => state.portofolio);
  useEffect(() => {
    const isLogin = localStorage.getItem("wrk_id");
    dispatch(getPortofolioUser(isLogin));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreatePortofolio = (e) => {
    dispatch(createPortofolio(porto, photo));
  };

  const handleChangePortofolio = (e) => {
    setPorto({
      ...porto,
      [e.target.name]: e.target.value,
    });
  };

  //SKILL
  const { skillUser } = useSelector((state) => state.skill);
  useEffect(() => {
    const isLogin = localStorage.getItem("wrk_id");
    dispatch(getSkillUser(isLogin));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateSkill = (e) => {
    dispatch(createSkill(skill));
  };
  const handleChangeSkill = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (skill_id) => {
    dispatch(deleteSkill(skill_id));
  };

  const [loading, isLoading] = useState(false);

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
                {loading ? (
                  <div className="d-flex">
                    <Skeleton
                      count={1}
                      circle
                      width={150}
                      height={150}
                      style={{ marginLeft: 107 }}
                      className="mt-3"
                    />
                  </div>
                ) : (
                  <div>
                    {workerUser.map((item) => (
                      <div key={item.wrk_id}>
                        <div className="col-md-12 d-flex">
                          <Image
                            src={
                              item.wrk_photo == "null" || item.wrk_photo == null
                                ? defaultprofile
                                : item.wrk_photo
                            }
                            width={150}
                            height={150}
                            quality={100}
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
                          <ModalEditPhotoWorker wrk_id={item.wrk_id} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="col-md-12 mt-4">
                  {loading ? (
                    <Skeleton count={4} height={25} className="mb-2" />
                  ) : (
                    <div>
                      {workerUser.map((item, index) => (
                        <div key={index}>
                          <p
                            className="fw-semibold mb-1"
                            style={{ fontSize: "22px" }}
                          >
                            {item.wrk_name}
                          </p>
                          <p className="mb-2" style={{ fontSize: "16px" }}>
                            {item.wrk_jobdesk}
                          </p>
                          <p
                            className="mb-2"
                            style={{ fontSize: "14px", color: "#9EA0A5" }}
                          >
                            {item.wrk_dom}
                          </p>
                          <p
                            className="mb-2"
                            style={{ fontSize: "14px", color: "#9EA0A5" }}
                          >
                            {item.wrk_desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {loading ? (
                    <Skeleton count={2} height={"50px"} className="mt-3" />
                  ) : (
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
                  )}
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
                    {loading ? (
                      <Skeleton
                        count={1}
                        height={36}
                        width={100}
                        className="mb-3"
                      />
                    ) : (
                      <p className="fw-semibold fs-4">Data diri</p>
                    )}
                  </div>
                  {loading ? (
                    <div>
                      <Skeleton count={4} height={60} className="mt-3" />
                      <Skeleton count={1} height={108} className="mt-3" />
                      <Skeleton count={1} height={50} className="mt-3" />
                    </div>
                  ) : (
                    <div>
                      {workerUser.map((item, index) => (
                        <div className="col-md-12 mt-3" key={index}>
                          <div>
                            <p
                              className="mb-0"
                              style={{ color: "#9EA0A5", fontSize: 14 }}
                            >
                              Nama lengkap
                            </p>
                            <input
                              type="text"
                              className="form-control container-fluid"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Masukan nama lengkap"
                              value={item.wrk_name}
                              style={{ height: 50 }}
                            />
                          </div>
                          <Form
                            wrk_dom={item.wrk_dom}
                            wrk_jobdesk={item.wrk_jobdesk}
                            wrk_place={item.wrk_place}
                            wrk_desc={item.wrk_desc}
                          />
                        </div>
                      ))}
                    </div>
                  )}
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
                    {loading ? (
                      <Skeleton
                        count={1}
                        height={36}
                        width={70}
                        className="mb-3"
                      />
                    ) : (
                      <p className="fw-semibold fs-4">Skill</p>
                    )}
                  </div>
                  {loading ? (
                    <Skeleton count={1} height={50} className="mt-3" />
                  ) : (
                    <div className="col-md-12 mt-3 d-flex flex-wrap">
                      {skillUser.map((item, index) => (
                        <div
                          className={`ps-2 pe-2  mb-2 ${styles.flexBox}`}
                          onClick={() => handleDelete(item.skill_id)}
                          style={{ cursor: "pointer" }}
                          key={index}
                        >
                          {item.skill_name}
                        </div>
                      ))}
                    </div>
                  )}
                  {loading ? (
                    <Skeleton count={1} height={50} className="mt-4" />
                  ) : (
                    <form onSubmit={handleCreateSkill}>
                      <div className="col-md-12 mt-3 input-group">
                        <input
                          type="text"
                          className="form-control container-fluid w-75"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-lg"
                          placeholder="Javascript, Html, css"
                          value={skill.skill_name}
                          name="skill_name"
                          onChange={handleChangeSkill}
                          style={{ height: 50 }}
                        />
                        <input
                          type="hidden"
                          name="wrk_id"
                          value={skill.wrk_id === login}
                        />
                        <button
                          type="submit"
                          className="btn btn-warning text-light fw-semibold"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              <div
                className={`col-md-12 mt-5 container ${styles.hightPK}`}
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  {loading ? (
                    <div>
                      <Skeleton count={1} height={49} width={300} />
                      <Skeleton count={1} height={150} className="mt-4" />
                      <Skeleton count={4} height={49} className="mt-3" />
                    </div>
                  ) : (
                    <div>
                      <div className="col-md-12 border-bottom pt-3">
                        <p className="fw-semibold fs-4">Pengalaman kerja</p>
                      </div>
                      <div className="col-md-12 mt-3">
                        {experienceUser.map((item, index) => (
                          <div
                            className="col-md-12 border-bottom mb-4 pb-4"
                            key={index}
                          >
                            <div className="row">
                              <div className="col-md-10">
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
                              <div className="col-md-2 mt-1 ">
                                <ModalEdit
                                  exp_id={item.exp_id}
                                  exp_position={item.exp_position}
                                  exp_compname={item.exp_compname}
                                  exp_datefrom={item.exp_datefrom}
                                  exp_dateuntil={item.exp_dateuntil}
                                  exp_desc={item.exp_desc}
                                />
                                <ModalDelete exp_id={item.exp_id} />
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* {JSON.stringify(data)} */}
                      </div>
                      <form onSubmit={handleCreateExperience} className="mb-4">
                        <div className="col-md-12 mt-3 border-bottom">
                          <div className="col-md-12 mt-3">
                            <p
                              className="mb-0"
                              style={{ color: "#9EA0A5", fontSize: 14 }}
                            >
                              Posisi
                            </p>
                            <input
                              type="text"
                              className="form-control container-fluid"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder=""
                              style={{ height: 50 }}
                              name="exp_position"
                              value={data.exp_position}
                              onChange={handleChangeExperience}
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6 mt-3">
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
                                placeholder=""
                                name="exp_compname"
                                value={data.exp_compname}
                                onChange={handleChangeExperience}
                                style={{ height: 50 }}
                              />
                            </div>
                            <div className="col-md-3 mt-3">
                              <p
                                className="mb-0"
                                style={{ color: "#9EA0A5", fontSize: 14 }}
                              >
                                Dari Bulan/tahun
                              </p>
                              <input
                                type="date"
                                className="form-control container-fluid"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder=""
                                name="exp_datefrom"
                                value={data.exp_datefrom}
                                onChange={handleChangeExperience}
                                style={{ height: 50 }}
                              />
                            </div>
                            <div className="col-md-3 mt-3">
                              <p
                                className="mb-0"
                                style={{ color: "#9EA0A5", fontSize: 14 }}
                              >
                                Sampai Bulan/tahun
                              </p>
                              <input
                                type="date"
                                className="form-control container-fluid"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                placeholder=""
                                name="exp_dateuntil"
                                value={data.exp_dateuntil}
                                onChange={handleChangeExperience}
                                style={{ height: 50 }}
                              />
                            </div>
                            <div className="col-md-12 mb-3">
                              <p
                                className="mb-0 mt-3"
                                style={{ color: "#9EA0A5", fontSize: 14 }}
                              >
                                Deskripsi singkat
                              </p>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                placeholder=""
                                name="exp_desc"
                                value={data.exp_desc}
                                onChange={handleChangeExperience}
                              ></textarea>
                              <input
                                type="hidden"
                                name="wrk_id"
                                value={(data.wrk_id = login)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <button
                            type="submit"
                            className="btn btn-outline-warning fw-semibold container-fluid"
                            style={{ height: 50 }}
                          >
                            Tambah pengalaman kerja
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`col-md-12 mt-5 container pb-3`}
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  {loading ? (
                    <div>
                      <Skeleton count={1} height={49} width={160} />
                      <Skeleton count={1} height={200} className="mt-4" />
                      <Skeleton count={4} height={49} className="mt-3" />
                    </div>
                  ) : (
                    <div>
                      <div className="col-md-12 border-bottom pt-3">
                        <p className="fw-semibold fs-4">Portofolio</p>
                      </div>
                      <div className="col-md-12 mt-3">
                        {portofolioUser.map((item, index) => (
                          <div
                            className="col-md-12 border-bottom mb-4"
                            key={index}
                          >
                            <div className="row mb-3">
                              <div className="col-md-4">
                                <div
                                  className="card p-0"
                                  style={{ width: "18rem", border: "none" }}
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
                                    quality={100}
                                    style={{
                                      objectFit: "cover",
                                      borderRadius: "4px",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <p>{item.por_name}</p>
                                <p>{item.por_repository}</p>
                              </div>
                              <div className="col-md-2 mt-1 ">
                                <ModalEditPorto
                                  por_id={item.por_id}
                                  por_name={item.por_name}
                                  por_repository={item.por_repository}
                                  por_photo={item.por_photo}
                                />
                                <ModalDeletePorto por_id={item.por_id} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <form onSubmit={handleCreatePortofolio}>
                        <div className="col-md-12 mt-3 border-bottom">
                          <div className="col-md-12 mt-3">
                            <p
                              className="mb-0"
                              style={{ color: "#9EA0A5", fontSize: 14 }}
                            >
                              Nama aplikasi
                            </p>
                            <input
                              type="text"
                              className="form-control container-fluid"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Masukan nama aplikasi"
                              name="por_name"
                              value={porto.por_name}
                              onChange={handleChangePortofolio}
                              style={{ height: 50 }}
                            />
                          </div>
                          <div className="col-md-12 mt-3">
                            <p
                              className="mb-0"
                              style={{ color: "#9EA0A5", fontSize: 14 }}
                            >
                              Link repository
                            </p>
                            <input
                              type="text"
                              className="form-control container-fluid"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Masukan link repository"
                              name="por_repository"
                              value={porto.por_repository}
                              onChange={handleChangePortofolio}
                              style={{ height: 50 }}
                            />
                          </div>
                          <div className="col-md-12 mt-3 mb-4">
                            <p
                              className="mb-0"
                              style={{ color: "#9EA0A5", fontSize: 14 }}
                            >
                              Upload gambar
                            </p>
                            <input
                              className="form-control"
                              type="file"
                              id="formFile"
                              name="por_photo"
                              value={porto.por_photo}
                              onChange={handleUpload}
                            />
                            <input
                              type="hidden"
                              name="wrk_id"
                              value={(porto.wrk_id = login)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <button
                            type="submit"
                            className="btn btn-outline-warning fw-semibold container-fluid"
                            style={{ height: 50 }}
                          >
                            Tambah Portofolio
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
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
