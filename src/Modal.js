import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import classes1 from "./App.module.css";
const Modal = (props) => {
  return (
    props.show && (
      <div>
        <div>
          <Backdrop show={props.show} clicked={props.modalClosed} />
          <div className={classes1.InnerDiv} style={{ marginBottom: "-10px" }}>
            <div className={classes.Modal}>{props.children}</div>
          </div>
        </div>
        <div className={classes.Triangle}></div>
      </div>
    )
  );
};

export default Modal;
