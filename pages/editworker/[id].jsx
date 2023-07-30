import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import noimage from "../../public/noimage.png";
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
  getSkillUser,
} from "../../configs/redux/actions/skillActions";

const EditProfile = () => {
  const [users, setUsers] = useState({
    wrk_jobdesk: "",
    wrk_dom: "",
    wrk_place: "",
    wrk_desc: "",
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
    wrk_id: "",
  });
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  const router = useRouter();

  //GET USERS LOGIN
  useEffect(() => {
    const isLogin = localStorage.getItem("wrk_id");

    axios
      .get(`http://localhost:7474/worker/profile/${isLogin}`)
      .then((res) => {
        console.log(res.data.data[0]);
        setUsers(res.data.data[0]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
    setLogin(isLogin);
  }, []);

  //UPDATE USERS
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:7474/worker/profile/${login}`, users)
      .then((res) => {
        setUsers(res.data.data[0]);
        window.location.reload();
      });
  };

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  //EXPERIENCE
  const dispatch = useDispatch();
  const { experienceUser } = useSelector((state) => state.experience);
  useEffect(() => {
    const isLogin = localStorage.getItem("wrk_id");
    dispatch(getExperienceUser(isLogin));
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
  }, []);

  const handleCreatePortofolio = (e) => {
    dispatch(createPortofolio(skill));
    console.log(login);
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
  }, []);

  const handleCreateSkill = (e) => {
    dispatch(createSkill(skill));
    console.log(login);
  };
  const handleChangeSkill = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

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
                  <p className="mb-2" style={{ fontSize: "16px" }}>
                    {users.wrk_jobdesk}
                  </p>
                  <p
                    className="mb-2"
                    style={{ fontSize: "14px", color: "#9EA0A5" }}
                  >
                    {users.wrk_dom}
                  </p>
                  <p
                    className="mb-2"
                    style={{ fontSize: "14px", color: "#9EA0A5" }}
                  >
                    {users.wrk_desc}
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
                    >
                      Batal
                    </button>
                  </div>
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
                  <div className="col-md-12 mt-3">
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
                      value={users.wrk_name}
                      style={{ height: 50 }}
                    />
                    <form onSubmit={handleUpdateProfile}>
                      <p
                        className="mb-0 mt-3"
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
                        value={users.wrk_jobdesk}
                        name="wrk_jobdesk"
                        onChange={handleChange}
                        style={{ height: 50 }}
                      />
                      <p
                        className="mb-0 mt-3"
                        style={{ color: "#9EA0A5", fontSize: 14 }}
                      >
                        Domisili
                      </p>
                      <input
                        type="text"
                        className="form-control container-fluid"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Masukan domisili"
                        value={users.wrk_dom}
                        name="wrk_dom"
                        onChange={handleChange}
                        style={{ height: 50 }}
                      />
                      <p
                        className="mb-0 mt-3"
                        style={{ color: "#9EA0A5", fontSize: 14 }}
                      >
                        Tempat kerja
                      </p>
                      <input
                        type="text"
                        className="form-control container-fluid"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Masukan tempat kerja"
                        value={users.wrk_place}
                        name="wrk_place"
                        onChange={handleChange}
                        style={{ height: 50 }}
                      />
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
                        placeholder="Tuliskan deskripsi singkat"
                        value={users.wrk_desc}
                        name="wrk_desc"
                        onChange={handleChange}
                      ></textarea>
                      <button
                        className="btn container-fluid fw-semibold mt-3"
                        style={{
                          border: "1px solid #5E50A1",
                          color: "#FFF",
                          height: "50px",
                          backgroundColor: "#5E50A1",
                          borderRadius: "4px",
                          margin: "auto",
                        }}
                      >
                        Update
                      </button>
                    </form>
                  </div>
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
                    <p className="fw-semibold fs-4">Skill</p>
                  </div>
                  <div className="col-md-12 mt-3 d-flex flex-wrap">
                    {skillUser.map((item) => (
                      <div className={`ps-2 pe-2  mb-2 ${styles.flexBox}`}>
                        {item.skill_name}
                      </div>
                    ))}
                  </div>
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
                        value={(skill.wrk_id = login)}
                      />
                      <button
                        type="submit"
                        className="btn btn-warning text-light fw-semibold"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
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
                  <div className="col-md-12 border-bottom pt-3">
                    <p className="fw-semibold fs-4">Pengalaman kerja</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    {experienceUser.map((item) => (
                      <div className="col-md-12 border-bottom mb-4">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="m-0 fw-semibold fs-5">
                              {item.exp_position}
                            </p>
                            <p className="m-0">{item.exp_compname}</p>
                            <p className="m-0" style={{ color: "#9EA0A5" }}>
                              {item.exp_datefrom} - {item.exp_dateuntil}
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
                            type="text"
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
                            type="text"
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
              </div>
              <div
                className={`col-md-12 mt-5 container pb-3`}
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                }}
              >
                <div className="row">
                  <div className="col-md-12 border-bottom pt-3">
                    <p className="fw-semibold fs-4">Portofolio</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    {portofolioUser.map((item) => (
                      <div className="col-md-12 border-bottom mb-4">
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
