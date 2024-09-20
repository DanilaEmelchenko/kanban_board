import Card from "../Card/Card";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <main className={s.container}>
      <div className={s.content}>
        <Card title="Backlog" />
        <Card title="Ready" />
        <Card title="In Progress" />
        <Card title="Finished" />
      </div>
    </main>
  );
};

export default Main;
