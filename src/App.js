import React, { Suspense } from 'react';
import{ Route, Switch } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuotes = React.lazy(() => import('./pages/NewQuotes'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }>
          <Switch>
            <Route exact path="/" component={AllQuotes} />

            <Route path='/quotes' exact>
              <AllQuotes />
            </Route>

            <Route path='/quotes/:quoteId' exact>
              <QuoteDetail />
            </Route>

            <Route path='/new-quote' exact>
              <NewQuotes />
            </Route>

            <Route path='/comments' exact>
              <Comments />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route> 

          </Switch>
        </Suspense>
      </Layout>  
    </>
  );
}

export default App;
