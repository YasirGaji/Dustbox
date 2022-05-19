import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'; 
import useHttp from '../hooks/hooks/use-http';
import { getSingleQuote } from '../lib/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

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
// ] - To be used in place of the realtime database

function QuoteDetail() {
  const match = useRouteMatch()
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true, params.quoteId);

  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId); - To be used in place of the realtime database

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

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

  if (!loadedQuote.text) {
    return <div>Quote not found</div>
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Routes>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Routes> 
      --- To be used when react router dom is on v6*/}

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      
    </>
  )
}

export default QuoteDetail