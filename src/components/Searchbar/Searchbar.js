import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ search, onChangeSearch }) => {
  return (
    <div className={style.searchbar}>
      <input
        className={style.searchForm}
        type="text"
        name="search"
        onChange={onChangeSearch}
        value={search}
      ></input>
    </div>
  );
};

Searchbar.protoType = {
  search: PropTypes.string,
  onChangeSearch: PropTypes.func,
};

export default Searchbar;
