import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Categories = (props) => {
  const { category } = props;
  return (
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
                  {category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.any,
}.isRequired;

export default Categories;
