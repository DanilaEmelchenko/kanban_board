import Backlog from "../Backlog/Backlog";
import InProgress from '../InProgress/InProgress';
import Ready from "../Ready/Ready";
import Finished from "../Finished/Finished";
import s from "./Card.module.scss";

const Card = ({ title }) => {
  return (
    <div className={s.card}>
      <h2 className={s.title}>{title}</h2>
      {title === "Backlog" && <Backlog cardStyles={s} />}
      {title === "Ready" && <Ready cardStyles={s} />}
      {title === "In Progress" && <InProgress cardStyles={s} />}
      {title === "Finished" && <Finished cardStyles={s} />}
    </div>
  );
};

export default Card;
