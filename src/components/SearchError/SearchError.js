import style from './SerchError.module.css';

export default function SerchError({ message }) {
  return <p className={style.Message}> Search images {message} not found</p>;
}
