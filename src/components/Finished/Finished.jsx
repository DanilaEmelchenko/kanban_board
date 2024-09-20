import { useContext, useState } from "react";
import { TaskContext } from "../../context/index";
import Button from "../ui/Button/Button";
import cn from "classnames";
import CardSelect from '../ui/CardSelect/CardSelect';

const Finished = ({ cardStyles }) => {
  const { finished, progressTasks, taskFinished } = useContext(TaskContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const isButtonDisabled = progressTasks.length === 0;
  return (
    <>
      {
        finished.map(task => (
          <div key={task.id} className={cardStyles.input}>{task.text}</div>
        ))
      }
      {showDropdown && (
        <CardSelect
          className={cardStyles.select}
          onChange={(e) => {
            taskFinished(+e.target.value);
            setShowDropdown(false);
          }}
        >
          <option disabled selected>Выберите задачу</option>
          {progressTasks.map(task => (
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

export default Finished;