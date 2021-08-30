import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => (
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
                    <p>Action</p>
                    <p>The Hunger Games</p>
                    <p>Suzanne Collins</p>
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

export default Books;
