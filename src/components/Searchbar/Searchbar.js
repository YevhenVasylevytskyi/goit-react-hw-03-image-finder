import React from 'react';
// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
// import style from './Searchbar.module.css';

/*= ({ search, onChangeSearch }) =>*/
export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSearchInput = event => {
    this.setState({
      inputValue: event.currentTarget.value.trim().toLocaleLowerCase(),
    });
    // console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.error('Введите название картинки');
      return;
    }

    this.props.searchPictures(this.state.inputValue);
    toast.success('Приятного просмотра');

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="inputValue"
          value={this.state.inputValue}
          onChange={this.handleSearchInput}
        />
        <button type="submit">
          <ImSearch />
          Search
        </button>
      </form>
    );
  }
}

// Searchbar.protoType = {
//   search: PropTypes.string,
//   onChangeSearch: PropTypes.func,
// };
