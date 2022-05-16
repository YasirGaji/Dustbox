import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/hooks/use-http';
import { getAllQuotes } from '../lib/lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   {
//     id: 'q1',
//     author: 'Oscar Wilde',
//     text: 'Be yourself; everyone else is already taken.'
//   },

//   {
//     id: 'q2',
//     author: 'loco',
//     text: 'I have nothing to declare except my genius'
//   }
// ] --To be used in place of the realtime database

function AllQuotes() {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();  
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className='centered focused'>
        {error}
      </div>
    )
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <div className='centered focused'>
        <NoQuotesFound />
      </div>
    )
  }

  return (
    <QuoteList quotes={loadedQuotes} />
  )
}

export default AllQuotes;