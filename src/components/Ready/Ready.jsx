import { useContext, useState } from "react";
import Button from "../ui/Button/Button";
import cn from "classnames";
import { TaskContext } from "../../context/index";
import CardSelect from '../ui/CardSelect/CardSelect';

const Ready = ({ cardStyles }) => {
  const { readyTasks, backlogTasks, taskReady } = useContext(TaskContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const isButtonDisabled = backlogTasks.length === 0 || backlogTasks.length === null;

  return (
    <>
      {readyTasks.map(task => (
        <div key={task.id} className={cardStyles.input}>{task.text}</div>
      ))}
      {showDropdown && (
        <CardSelect
          className={cardStyles.select}
          onChange={(e) => {
            taskReady(+e.target.value);
            setShowDropdown(false);
          }}
        >
          <option disabled selected>Выберите задачу</option>
          {backlogTasks.map(task => (
            <option key={task.id} value={task.id}>
              {task.text}
            </option>
          ))}
        </CardSelect>
      )}

      <Button
        onClick={() => setShowDropdown(true)}
        className={cn(cardStyles["button-add"], {
          [cardStyles["disabled"]]: isButtonDisabled,
        })}
        disabled={isButtonDisabled}>
        + Add card
      </Button >
    </>
  );
}

export default Ready;