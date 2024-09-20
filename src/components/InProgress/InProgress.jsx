import { useContext, useState } from "react";
import { TaskContext } from "../../context/index";
import Button from "../ui/Button/Button";
import cn from "classnames";
import CardSelect from '../ui/CardSelect/CardSelect';

const InProgress = ({ cardStyles }) => {
  const { progressTasks, readyTasks, taskProgress } = useContext(TaskContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const isButtonDisabled = readyTasks.length === 0;
  return (
    <>
      {
        progressTasks.map(task => (
          <div key={task.id} className={cardStyles.input}>{task.text}</div>
        ))
      }
      {showDropdown && (
        <CardSelect
          className={cardStyles.select}
          onChange={(e) => {
            taskProgress(+e.target.value);
            setShowDropdown(false);
          }}
        >
          <option disabled selected>Выберите задачу</option>
          {readyTasks.map(task => (
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
};

export default InProgress;