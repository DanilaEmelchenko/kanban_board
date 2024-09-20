import Tasks from '../pages/Tasks';
import TasksId from '../pages/TasksId';

export const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    name: "TasksId",
    component: TasksId,
  },
];

export default routes;
