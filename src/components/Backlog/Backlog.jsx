import cn from "classnames";
import { Link } from "react-router-dom";

import { TaskContext } from "../../context/index";
import { useContext, useState } from "react";

import Button from "../ui/Button/Button";
import Input from '../ui/Input/Input';

const Backlog = ({ cardStyles }) => {
  const { backlogTasks, taskBacklog } = useContext(TaskContext);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [newTask, setNewTask] = useState("");

  const toggleButton = () => {
    setIsVisibleButton(true);
    setInputError(false);
  };

  const error = (e) => {
    setNewTask(e.target.value);
    if (e.target.value.trim()) {
      setInputError(false);
    }
  };

  const addTask = () => {
    if (newTask.trim()) {
      taskBacklog(newTask);
      setNewTask("");
      setIsVisibleButton(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <>
      {backlogTasks.map((task) => (
        <Link
          key={task.id}
          to={`/tasks/${task.id}`}
          className={cardStyles.input}>
          {task.text}
        </Link>
      ))}
      {isVisibleButton ? (
        <>
          <Input
            type="text"
            value={newTask}
            onChange={error}
            className={cn(cardStyles["input"],
              { [cardStyles["input-error"]]: inputError })}
          />
          <Button onClick={addTask} className={cardStyles["button-submit"]}>
            Submit
          </Button>
        </>
      ) : (
        <Button onClick={toggleButton} className={cardStyles["button-add"]}>
          + Add card
        </Button>
      )}
    </>
  );
};

export default Backlog;
