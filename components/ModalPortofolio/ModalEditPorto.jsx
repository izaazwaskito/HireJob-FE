import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { editPortofolio } from "../../configs/redux/actions/portofolioAction";

const ModalEditPorto = ({ por_id, por_name, por_repository, por_photo }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [porto, setPorto] = useState({
    por_name,
    por_repository,
  });
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleChangePortofolio = (e) => {
    setPorto({
      ...porto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPortofolio(por_id, porto, photo, setShow));
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
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
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
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
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
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <button
                type="submit"
                className="btn btn-outline-warning fw-semibold container-fluid"
                style={{ height: 50 }}
              >
                Edit Portofolio
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditPorto;
