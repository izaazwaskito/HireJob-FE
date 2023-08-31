import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import pen from "../../public/pen.svg";
import Image from "next/image";
import { editPhotoRecruiter } from "../../configs/redux/actions/recruiterAction";

const ModalEditPhotoRecruiter = ({ rec_id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPhotoRecruiter(rec_id, photo, setShow));
  };

  return (
    <>
      <div className="row m-auto" onClick={handleShow}>
        <div className="col-md-1 col-1">
          <Image src={pen} style={{ cursor: "pointer" }} alt="photo" />
        </div>
        <div className="col-md-2 col-4 ps-2">
          <p
            style={{ color: "#9EA0A5", fontSize: "20px", cursor: "pointer" }}
            className="fw-semibold"
          >
            Edit
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="col-md-12 mt-3 border-bottom">
              <div className="col-md-12 mt-3 mb-4">
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
                  Upload gambar
                </p>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="rec_photo"
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
                Edit Photo
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditPhotoRecruiter;
