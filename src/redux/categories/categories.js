import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
  <div className="main-container">
    <div className="wrap">
      <div className="card">
        <div className="card-header">
          <div className="title">
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
              <div className="card-body">
                Under Construction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Categories;
