import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../configs/redux/actions/experienceAction";
import { Button, Modal } from "react-bootstrap";

const ModalDelete = ({ exp_id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteExperience(exp_id, setShow));
  };

  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        className="btn btn-danger fw-semibold text-light"
      >
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
