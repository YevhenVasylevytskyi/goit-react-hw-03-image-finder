// import PropTypes from 'prop-types';
import { Component } from 'react';
// import style from './Searchbar.module.css';

/*= ({ search, onChangeSearch }) =>*/
export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSearchInput = event => {
    this.setState({
      searchValue: event.currentTarget.value.trim().toLocaleLowerCase(),
    });
    // console.log(event.currentTarget.value);
  };

  handleSabmit = event => {
    event.preventDefualt();

    this.props.searchQuery(this.state.searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={this.handleSearchInput}
          value={this.state.searchValue}
        ></input>
      </div>
    );
  }
}

// Searchbar.protoType = {
//   search: PropTypes.string,
//   onChangeSearch: PropTypes.func,
// };
