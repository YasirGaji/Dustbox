import { useRef, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/hooks/use-http';
import { addComment } from '../../lib/lib/api';
import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  // const params = useParams();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment])

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    sendRequest({ commentData: {text: enteredText}, quoteId: props.quoteId }); // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
