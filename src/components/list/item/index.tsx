import style from "../list-style.module.scss";

export default function Item({ todo, timer }: { todo: string; timer: string }) {
  return (
    <li className={style.item}>
      <h3>{todo}</h3>
      <span>{timer}</span>
    </li>
  );
}
