import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import store from './redux/configureStores';
import AddBook from './components/Add';

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root'),
);
