import React from "react";
import "./Modal.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Modal({ handleClose, id }) {
  let history = useHistory();

  function handleDelete() {
    axios.delete(`http://localhost:5050/entries/${id}`).then((res) => {
      if (res.status === 200) {
        console.log(`entry with ${id} was deleted`);
      }
    });
    history.push("/gallery");
  }

  return (
    <>
      <div className="overlay">
        <div className="modal">
          <p className="modal__text">
            Are you sure you want to detele this entry?
          </p>
          <div className="modal__button-container">
            <button className="modal__button" onClick={handleDelete}>
              Yes
            </button>
            <button className="modal__button" onClick={handleClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
