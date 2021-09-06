import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookSuccess, fetchBooks } from '../redux/books/books';
import '../index.css';

const Books = () => {
  const dispatch = useDispatch();
  const booksStatus = useSelector((state) => state.books.loading);

  useEffect(() => {
    if (booksStatus === false) {
      dispatch(fetchBooks());
    }
  }, []);

  const removeBookBtn = (e) => {
    dispatch(removeBookSuccess(e.target));
  };

  const myBooks = useSelector((state) => state.books.books);

  const AddBookCard = () => (
    <div>
      {myBooks.map((book) => {
        const randomNum = Math.floor(Math.random() * 100);
        const barstyle = {
          width: `${randomNum}%`,
        };

        return (
          <div className="card" key={book.id}>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="fs-6 text-secondary">{book.category}</p>
                    <p className="fs-5 fw-bold">{book.title}</p>
                    <p className="fs-5" id="typeface">{book.author}</p>
                    <div className="container p-0">
                      <div className="row" id="typeface">
                        <div className="col">
                          Comments
                        </div>
                        <div className="col">
                          <button type="button" onClick={removeBookBtn} id={book.id} className="buttonRemove">Remove</button>
                        </div>
                        <div className="col">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress-circle">
                      <div id="progress-circle">
                        <CircularProgressbar value={randomNum} style={barstyle} />
                      </div>
                      <div>
                        {randomNum}
                        % Completed
                      </div>
                    </div>

                  </div>
                  <div className="col">
                    <p>Current chapter</p>
                    <p>
                      Chapter&nbsp;

                      {Math.floor(Math.random() * 100)}
                    </p>
                    <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="container align-middle pt-5">
      <div className="container my-5 align-middle" id="formContainer">
        <div className="card">
          <div className="card-header bg-white">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <span className="Bookstore-CMS Text-Style-5">Bookstore CMS</span>
                </div>
                <div className="col-sm-2">
                  <Link className="links" to="/">
                    <span className="BOOKS Text-Style-7">
                      BOOKS
                    </span>
                  </Link>
                </div>
                <div className="col-sm-5">
                  <Link className="links" to="/categories">
                    CATEGORY
                  </Link>
                </div>
                <div className="col-sm-2">
                  <div className="logContainer">
                    <Link to="/" className="logUser">
                      <i className="fas fa-user rounded"> </i>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="card-body">
            <AddBookCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
