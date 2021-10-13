import React, { Component } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    search: '',
  };

  changeSearch = event => {
    this.setState({ search: event.currentTarget.value.toLocaleLowerCase() });
    console.log(event.currentTarget.value);
  };

  render() {
    return (
      <Container>
        <Searchbar
          search={this.state.search}
          onChangeSearch={this.changeSearch}
        />
      </Container>
    );
  }
}

export default App;
