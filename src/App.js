import{ Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={AllQuotes} />
        
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>

        <Route path='/quotes/quoteId' exact>
          <QuoteDetail />
        </Route>

        <Route path='/new-quote' exact>
          <NewQuotes />
        </Route>
      </Switch>
    </>
  );
}

export default App;
