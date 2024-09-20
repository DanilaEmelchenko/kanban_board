import { Routes, Route, Navigate } from "react-router-dom";
import routes from '../../router';

const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/tasks" />} />
      </Routes>
    </>
  );
};

export default AppRouter;