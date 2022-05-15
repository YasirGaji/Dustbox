import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Oscar Wilde',
    text: 'Be yourself; everyone else is already taken.'
  },

  {
    id: 'q2',
    author: 'loco',
    text: 'I have nothing to declare except my genius'
  }
]

function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes;