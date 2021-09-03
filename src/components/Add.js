import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Drama');
  const dispatch = useDispatch();
  const titleChanged = (e) => setTitle(e.target.value);
  const categoryChanged = (e) => setCategory(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          category,
          title,
        }),
      );
      setTitle('');
      setCategory('Drama');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title} onChange={(e) => { titleChanged(e); }} />
        </label>
        <select name="category" value={category} onChange={categoryChanged}>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
        </select>
      </form>
      <button type="button" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
};

export default AddBook;
