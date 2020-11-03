import React from 'react';
import classes from './Modal.module.css';
import Backdrop from './Backdrop';
const Modal =(props)=>  {
  
  
       
        return(
           <div>
                 <Backdrop show={props.show} clicked={props.modalClosed}/>

            <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)':'translateY(-100vh)',
      opacity : props.show ? '1':'0'

 }}>
           
                {props.children}

            </div>
            <div className={classes.Triangle} style={{
      transform: props.show ? 'translateY(0)':'translateY(-100vh)',
      opacity : props.show ? '1':'0'

 }}></div>
            
    </div>

        );
    
}
   
export default Modal;