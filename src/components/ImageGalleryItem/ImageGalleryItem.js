import { Component } from 'react';
import style from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.cards.map(card => {
      return (
        <li className={style.ImageGalleryItem} key={card.id}>
          <div>{<img src={card.webformatURL} alt={card.id} />}</div>
        </li>
      );
    });
  }
}
