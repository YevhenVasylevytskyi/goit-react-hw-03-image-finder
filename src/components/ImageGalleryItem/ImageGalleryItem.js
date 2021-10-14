import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.cards.map(card => {
      return (
        <li key={card.id}>
          <div>{<img src={card.webformatURL} alt={card.id} />}</div>
        </li>
      );
    });
  }
}
