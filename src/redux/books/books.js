import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Books = (props) => {
  const { genre, title, author } = props;

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
                <div className="details">
                  <div className="row">
                    <div className="col">
                      <p className="genre">{genre}</p>
                      <p className="title">{title}</p>
                      <p className="author">{author}</p>
                      <div className="details">
                        <div className="row">
                          <div className="col">
                            Comments
                          </div>
                          <div className="col">
                            Remove
                          </div>
                          <div className="col">
                            Edit
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      64% Completed
                    </div>
                    <div className="col">
                      <p>Current chapter</p>
                      <p>Chapter 17</p>
                      <button type="button" className="update">UPDATE PROGRESS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  genre: PropTypes.any,
  title: PropTypes.any,
  author: PropTypes.any,
}.isRequired;

export default Books;
