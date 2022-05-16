import React, { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/hooks/use-http';
import { addQuote } from '../lib/lib/api';

function NewQuotes() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => { 
    if (status === 'completed') {
      history.push('/quotes');
    }

  }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  }

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuotes