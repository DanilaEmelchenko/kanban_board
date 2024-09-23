import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../../context';
import s from './MainTasksId.module.scss';

const MainTasksId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { backlogTasks, readyTasks, progressTasks, finished } = useContext(TaskContext);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const storageDescriptions = JSON.parse(localStorage.getItem('descriptions')) || [];
    const taskDescription = storageDescriptions.find(d => d.id === +id);

    if (taskDescription) {
      setDescription(taskDescription.text);
    } else {
      setDescription('This task has no description');
    }
  }, [id]);

  const tasks =
    [...backlogTasks,
    ...readyTasks,
    ...progressTasks,
    ...finished
    ].find(t => t.id === +id)

  const clickClose = () => {
    navigate('/tasks');
  }

  const saveDescription = (e) => {
    const updatedText = e.target.value;
    setDescription(updatedText);

    const storageDescriptions = JSON.parse(localStorage.getItem('descriptions')) || [];
    const updatedDescriptions = storageDescriptions.filter(d => d.id !== +id);
    updatedDescriptions.push({ id: +id, text: updatedText });
    localStorage.setItem('descriptions', JSON.stringify(updatedDescriptions));
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.description}>
          {tasks && <h2 className={s.title}>{tasks.text}</h2>}
          <textarea
            onChange={saveDescription}
            value={description}
            cols="80"
            rows="10"
            style={{ resize: 'none', outline: 'none', border: 'none' }}>
          </textarea>
        </div>
        <div className={s.close} onClick={clickClose}></div>
      </div>
    </div>
  );
};

export default MainTasksId;