import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (item) => {
    item.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      genre,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  const titleChange = (item) => setTitle(item.target.value);
  const authorChange = (item) => setAuthor(item.target.value);
  const genreChange = (item) => setGenre(item.target.value);

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title} onChange={(e) => { titleChange(e); }} />
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" id="author" value={author} onChange={(e) => { authorChange(e); }} />
        </label>
        <label htmlFor="genre">
          genre:
          <input type="text" id="genre" value={genre} onChange={(e) => { genreChange(e); }} />
        </label>
      </form>
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
};

export default AddBook;
