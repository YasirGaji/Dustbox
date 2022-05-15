import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

function NewQuotes() {
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuotes