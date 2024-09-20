import s from "./Header.module.scss";

import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.content}>
        <h1 className={s.title}>Awesome Kanban Board</h1>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
