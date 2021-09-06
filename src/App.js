import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
