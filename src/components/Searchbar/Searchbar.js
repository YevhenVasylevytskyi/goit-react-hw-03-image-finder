// import style from './Searchbar.module.css';

const Searchbar = ({ search, onChangeSearch }) => {
  return (
    <input
      type="text"
      name="search"
      onChange={onChangeSearch}
      value={search}
    ></input>
  );
};

// Search.protoType = {
//   search: PropTypes.string,
//   onChangeSearch: PropTypes.func,
// };

export default Searchbar;
