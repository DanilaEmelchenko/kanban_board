import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [readyTasks, setReadyTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    const storageBacklogTasks = JSON.parse(localStorage.getItem("backlogTasks")) || [];
    const storageReadyTasks = JSON.parse(localStorage.getItem("readyTasks")) || [];
    const storageProgressTasks = JSON.parse(localStorage.getItem("progressTasks")) || [];
    const storageFinished = JSON.parse(localStorage.getItem("finished")) || [];
    setBacklogTasks(storageBacklogTasks);
    setReadyTasks(storageReadyTasks);
    setProgressTasks(storageProgressTasks);
    setFinished(storageFinished);
  }, []);

  const taskBacklog = (task) => {
    setBacklogTasks(p => {
      const updatedBacklog = ([...p, { id: Date.now(), text: task }]);
      localStorage.setItem("backlogTasks", JSON.stringify(updatedBacklog));
      return updatedBacklog;
    })
  };

  const taskReady = (taskId) => {
    const task = backlogTasks.find((t) => t.id === taskId);
    setReadyTasks(p => {
      const updatedReady = ([...p, task]);
      localStorage.setItem("readyTasks", JSON.stringify(updatedReady));
      return updatedReady;
    })
    setBacklogTasks(p => {
      const updatedBacklog = (p.filter((t) => t.id !== taskId));
      localStorage.setItem("backlogTasks", JSON.stringify(updatedBacklog));
      return updatedBacklog;
    })

  };

  const taskProgress = (taskId) => {
    const task = readyTasks.find((t) => t.id === taskId);
    setProgressTasks(p => {
      const updatedProgress = ([...p, task]);
      localStorage.setItem("progressTasks", JSON.stringify(updatedProgress));
      return updatedProgress;
    })
    setReadyTasks(p => {
      const updatedReady = (p.filter((t) => t.id !== taskId));
      localStorage.setItem("readyTasks", JSON.stringify(updatedReady));
      return updatedReady;
    })
  };

  const taskFinished = (taskId) => {
    const task = progressTasks.find((t) => t.id === taskId);
    setFinished(p => {
      const updatedFinished = ([...p, task]);
      localStorage.setItem("finished", JSON.stringify(updatedFinished));
      return updatedFinished;
    });
    setProgressTasks(p => {
      const updatedProgress = (p.filter((t) => t.id !== taskId));
      localStorage.setItem("progressTasks", JSON.stringify(updatedProgress));
      return updatedProgress;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        backlogTasks,
        readyTasks,
        progressTasks,
        finished,
        taskBacklog,
        taskReady,
        taskProgress,
        taskFinished,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
