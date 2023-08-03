import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editWorker } from "../../configs/redux/actions/workerAction";

const Form = ({ wrk_jobdesk, wrk_dom, wrk_place, wrk_desc }) => {
  const [worker, setWorker] = useState({
    wrk_jobdesk,
    wrk_dom,
    wrk_place,
    wrk_desc,
  });
  const handleEditWorker = (e) => {
    e.preventDefault();
    const wrk_id = localStorage.getItem("wrk_id");
    dispatch(editWorker(wrk_id, worker));
  };

  const handleChangeWorker = (e) => {
    setWorker({
      ...worker,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleEditWorker}>
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Job desk
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan job desk"
          value={worker.wrk_jobdesk}
          name="wrk_jobdesk"
          onChange={handleChangeWorker}
          style={{ height: 50 }}
        />

        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Domisili
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan domisili"
          value={worker.wrk_dom}
          name="wrk_dom"
          onChange={handleChangeWorker}
          style={{ height: 50 }}
        />
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Tempat kerja
        </p>
        <input
          type="text"
          className="form-control container-fluid"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Masukan tempat kerja"
          value={worker.wrk_place}
          name="wrk_place"
          onChange={handleChangeWorker}
          style={{ height: 50 }}
        />
        <p className="mb-0 mt-3" style={{ color: "#9EA0A5", fontSize: 14 }}>
          Deskripsi singkat
        </p>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          value={worker.wrk_desc}
          name="wrk_desc"
          onChange={handleChangeWorker}
          placeholder="Tuliskan deskripsi singkat"
        ></textarea>
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

export default Form;
