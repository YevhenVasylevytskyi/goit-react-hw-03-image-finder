import React, { Component } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
    pictures: [],
    loading: false,
  };

  handlesearchQuery = searchQuery => {
    this.setState({ searchValue: searchQuery });
    console.log(searchQuery);
  };

  // changeSearch = event => {
  //   this.setState({ search: event.currentTarget.value.toLocaleLowerCase() });
  //   console.log(event.currentTarget.value);
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=23013902-f53df9bcd1cd3c8e660b93280&image_type=photo&orientation=horizontal&per_page=12',
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState(prevState => {
  //         return {
  //           pictures: [...prevState.pictures, ...result.hits],
  //         };
  //       });
  //       console.log(this.state.pictures);
  //     })
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <Container>
        <Searchbar searchQuery={this.handlesearchQuery} />
        {/* // search={this.state.search}
          // onChangeSearch={this.changeSearch} */}

        {/* <div>
          <ul>
            {this.state.loading && <h1>Загружаем</h1>}
            {this.state.pictures &&
              this.state.pictures.map(picture => {
                return (
                  <li key={picture.id}>
                    <div>
                      {<img src={picture.webformatURL} alt={picture.id} />}
                    </div>
                    {/* <img src={picture.hits.webformatURL} /> */}
        {/* </li> */}
        {/* ); */}
        {/* })} */}
        {/* </ul> */}
        {/* </div> */}
      </Container>
    );
  }
}

export default App;
