import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    cards: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;

    if (prevSearch !== nextSearch) {
      //   console.log('prevProps.searchQuery:', prevProps.searchQuery);
      //   console.log('this.props.searchQuery:', this.props.searchQuery);
      //   console.log('Изменился запрос');

      fetch(
        `https://pixabay.com/api/?q=${nextSearch}&page=1&key=23013902-f53df9bcd1cd3c8e660b93280&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(result => {
          return this.setState({ cards: result.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
    //   console.log(this.state.cards);
  }

  render() {
    return (
      <div>
        {this.state.cards && (
          <ul>
            <ImageGalleryItem cards={this.state.cards} />
          </ul>
        )}
      </div>
    );
  }
}
