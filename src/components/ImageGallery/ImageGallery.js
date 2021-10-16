import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import ApiService from '../../services/ApiService';
import style from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    cards: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;

    if (prevSearch !== nextSearch) {
      //   console.log('prevProps.searchQuery:', prevProps.searchQuery);
      //   console.log('this.props.searchQuery:', this.props.searchQuery);
      //   console.log('Изменился запрос');

      ApiService(nextSearch, 1).then(result => {
        if (result.hits.length !== 0) {
          return this.setState({
            cards: result.hits,
            page: 1,
          });
        }

        return this.setState({ cards: result.hits });
      });
    }
    //   console.log(this.state.cards);
  }

  loadMore = () => {
    const nextSearch = this.props.searchQuery;
    const { page } = this.state;

    ApiService(nextSearch, page + 1)
      .then(result => {
        return this.setState(prevState => {
          return {
            cards: [...prevState.cards, ...result.hits],
            page: prevState.page + 1,
          };
        });
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    // console.log("this.state.page", this.state.page);
  };

  render() {
    return (
      <div>
        {this.state.cards && (
          <>
            <ul className={style.ImageGallery}>
              <ImageGalleryItem cards={this.state.cards} />
            </ul>

            <Button loadMore={this.loadMore} />
          </>
        )}
      </div>
    );
  }
}
