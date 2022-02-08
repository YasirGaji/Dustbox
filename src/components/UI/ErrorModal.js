import React from 'react';
import ReactDOM from 'react-dom';
import style from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import Wrapper from '../Helpers/Wrapper';

const Backdrop = props => {
  return (
    <div className={style.backdrop} onClick={props.onConfirm} />
  );
}

const ModalOverlay = props => {
  return (
    <Card className={style.modal}>
      <header className={style.header}> 
        <h2>{props.title}</h2>
      </header>

      <div className={style.content}>
        <p>{props.message}</p>
      </div>

      <footer className={style.actions}>
        <Button onClick={props.onConfirm}>Close</Button>
      </footer>
    </Card>
  )
}

function ErrorModal(props) {
  return (
    <Wrapper>
     {ReactDOM.createPortal(
       <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
     )}

     {ReactDOM.createPortal(
       <ModalOverlay 
          onConfirm={props.onConfirm} 
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
     )}
    </Wrapper>
  );
}

export default ErrorModal;
