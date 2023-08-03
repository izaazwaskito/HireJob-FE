import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editExperience } from "../../configs/redux/actions/experienceAction";
import { Button, Modal } from "react-bootstrap";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalEdit = ({
  exp_id,
  exp_position,
  exp_compname,
  exp_datefrom,
  exp_dateuntil,
  exp_desc,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [data, setData] = useState({
    exp_position,
    exp_compname,
    exp_datefrom,
    exp_dateuntil,
    exp_desc,
  });

  let handleChangeExperience = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editExperience(exp_id, data, setShow));
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        className="btn btn-warning fw-semibold text-light me-3 "
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="col-md-12 mt-3 border-bottom">
              <div className="col-md-12 mt-3">
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
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
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <button
                type="submit"
                className="btn btn-outline-warning fw-semibold container-fluid"
                style={{ height: 50 }}
              >
                Edit pengalaman kerja
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
