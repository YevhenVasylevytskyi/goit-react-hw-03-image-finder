import React, { Component } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handlesearchQuery = searchQuery => {
    this.setState({ searchQuery });
    // console.log(searchQuery);
  };

  render() {
    return (
      <Container>
        <Searchbar searchPictures={this.handlesearchQuery} />
        <ImageGallery searchQuery={this.state.searchQuery} />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}

export default App;
