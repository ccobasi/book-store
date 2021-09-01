import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
  <div className="container align-middle py-5">
    <div className="container my-5 align-middle" id="formContainer">
      <div className="card">
        <div className="card-header">
          <div className="container">
            <div className="row">
              <div className="col">
                Bookstore CMS
              </div>
              <div className="col">
                <Link className="links" to="/">BOOKS</Link>
              </div>
              <div className="col">
                <Link className="links" to="/categories">CATEGORIES</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card">
            <div className="card-body">
              Under Construction
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Categories;
