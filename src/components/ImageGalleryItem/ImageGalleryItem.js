import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    card: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;

    if (prevSearch !== nextSearch) {
      console.log('prevProps.searchQuery:', prevProps.searchQuery);
      console.log('this.props.searchQuery:', this.props.searchQuery);
      console.log('Изменился запрос');

      fetch(
        `https://pixabay.com/api/?q=${nextSearch}&page=1&key=23013902-f53df9bcd1cd3c8e660b93280&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        // .then(console.log)
        .then(result => {
          this.setState(prevState => {
            return {
              card: [...prevState.card, ...result.hits],
            };
          });
          console.log(this.state.card);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  // console.log(this.state.card);
  // .finally(() => this.setState({ loading: false }));
  // this.setState({ card })

  render() {
    return (
      <div>
        <h1>ImageItem</h1>
        {this.state.card && (
          <div>
            <img
              src={this.state.card.hits.webformatURL}
              alt={this.state.card.hits.id}
            />
            {/* {this.state.card.hits.} */}
          </div>
        )}
        {/* {<img src={picture.webformatURL} alt={picture.id} />} */}
      </div>
    );
  }
}
