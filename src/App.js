import{ Route, Switch } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <>
      <Layout>
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
      </Layout>
      
    </>
  );
}

export default App;
