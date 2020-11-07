import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import classes1 from "./App.module.css";
const Modal = (props) => {
  return (
    <div>
      {" "}
      <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes1.InnerDiv} style={{ marginBottom: "-10px" }}>
          <div
            className={classes.Modal}
            style={{
              transform: props.show ? "translateY(0)" : "translateY(-100vh)",
              opacity: props.show ? "1" : "0",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
      <div
        className={classes.Alaa}
        style={{
          //transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default Modal;
