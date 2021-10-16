import style from './SerchError.module.css';

export default function SerchError({ message }) {
  return (
    <span className={style.Message}> Search images "{message}" not found </span>
  );
}
