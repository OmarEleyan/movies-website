import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../Common/NavBar';
import Home from '../pages/Home';
import Watchlist from '../pages/Watchlist';
import Movie from '../pages/Movie';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/watchlist' component={Watchlist} />
        <Route exact path='/movie/:id' component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
