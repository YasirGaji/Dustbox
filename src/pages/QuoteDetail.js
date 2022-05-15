import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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

function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <div>Quote not found</div>
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail