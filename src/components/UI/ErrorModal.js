import React from 'react';
import style from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import Wrapper from '../Helpers/Wrapper';

function ErrorModal(props) {
  return (
    <Wrapper>
      <div className={style.backdrop} onClick={props.onConfirm} />
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
    </Wrapper>
  );
}

export default ErrorModal;
