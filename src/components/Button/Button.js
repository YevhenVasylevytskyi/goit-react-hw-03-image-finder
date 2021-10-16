import style from './Button.module.css';

export default function Button({ loadMore }) {
  return (
    <button type="submit" onClick={() => loadMore()} className={style.Button}>
      Load more
    </button>
  );
}
