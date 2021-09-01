import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import './index.css';
import store from './redux/configureStore';
import AddBook from './components/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Books />
              <AddBook />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
