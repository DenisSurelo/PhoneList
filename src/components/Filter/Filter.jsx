import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
