import { useContext } from 'react';
import s from './Footer.module.scss';
import { TaskContext } from '../../context';

const Footer = () => {
  const { backlogTasks, finished } = useContext(TaskContext)

  const backlogNum = backlogTasks.length;
  const finishedNum = finished.length;

  return (
    <footer className={s.container}>
      <div className={s.content}>
        <div className={s.tasks}>
          <p className={s['tasks-active']}>Active tasks: {`<${backlogNum}>`}</p>
          <p className={s['tasks-finished']}>Finished tasks: {`<${finishedNum}>`}</p>
        </div>
        <p>Kanban board by {`<Danila>`}, {`<2024>`}</p>
      </div>
    </footer>
  );
};

export default Footer;