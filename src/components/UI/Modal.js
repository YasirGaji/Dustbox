import React from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={style.backdrop} />
};

const ModalOverlay = (props) => {
  return <div className={style.modal}>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
};

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
