import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editRecruiter } from "../../configs/redux/actions/recruiterAction";

const FormRecruiter = ({
  rec_jobfield,
  rec_province,
  rec_city,
  rec_desc,
  rec_emailcomp,
  rec_linkedin,
}) => {
  const [recruiter, setRecruiter] = useState({
    rec_jobfield,
    rec_province,
    rec_city,
    rec_desc,
    rec_emailcomp,
    rec_linkedin,
  });
  const handleEditRecruiter = (e) => {
    e.preventDefault();
    const rec_id = localStorage.getItem("rec_id");
    dispatch(editRecruiter(rec_id, recruiter));
  };

  const handleChangeRecruiter = (e) => {
    setRecruiter({
      ...recruiter,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleEditRecruiter}>
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Bidang
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan bidang perusahaan ex : Financial"
          value={recruiter.rec_jobfield}
          name="rec_jobfield"
          onChange={handleChangeRecruiter}
          style={{ height: 50 }}
        />
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Provinsi
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan provinsi"
          value={recruiter.rec_province}
          name="rec_province"
          onChange={handleChangeRecruiter}
          style={{ height: 50 }}
        />
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Kota
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan domisili"
          value={recruiter.rec_city}
          name="rec_city"
          onChange={handleChangeRecruiter}
          style={{ height: 50 }}
        />
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Deskripsi singkat
        </p>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="Tuliskan deskripsi singkat"
          value={recruiter.rec_desc}
          name="rec_desc"
          onChange={handleChangeRecruiter}
        ></textarea>

        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Email Perusahaan
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan email perusahaan"
          value={recruiter.rec_emailcomp}
          name="rec_emailcomp"
          onChange={handleChangeRecruiter}
          style={{ height: 50 }}
        />

        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Linkedin
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan nama Linkedin"
          value={recruiter.rec_linkedin}
          name="rec_linkedin"
          onChange={handleChangeRecruiter}
          style={{ height: 50 }}
        />
        <button
          className="btn container-fluid fw-semibold mt-3"
          type="submit"
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
  );
};

export default FormRecruiter;
