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
    <div className="container mx-auto mb-5">
      <div className="container mx-auto align-middle">
        <form onSubmit={submitBookToStore} className="mx-auto">
          ADD NEW BOOK
          <div className="row">
            <div className="col-sm-4">
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => { titleChanged(e); }}
                placeholder="Title"
                required
              />
            </div>
            <div className="col-sm-2">
              <select name="category" className="form-select" id="category" value={category} onChange={categoryChanged}>
                <option value="category 1">Drama</option>
                <option value="category 1">Action</option>
                <option value="category 1">Fiction</option>
              </select>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary buttonAdd" onClick={submitBookToStore}>ADD BOOK</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddBook;
