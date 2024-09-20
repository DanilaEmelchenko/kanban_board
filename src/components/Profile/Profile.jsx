import s from "./Profile.module.scss";

import { useState } from "react";

import Button from "../ui/Button/Button";

import AvatarUser from "../../assets/icons/user-avatar.svg";
import ArrowDropDown from "../../assets/icons/arrow-dropDown.svg";
import ArrowDropUp from "../../assets/icons/arrow-dropUp.svg";
import ProfileSelect from '../ui/ProfileSelect/ProfileSelect';


const Profile = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(p => !p);
  };

  return (
    <div className={s["profile-wrapper"]}>
      <div className={s["profile-avatar"]}>
        <img className={s["image-avatar"]} src={AvatarUser} alt="avatar" />
      </div>
      <Button onClick={toggleDropDown} className={s["profile-button"]}>
        {isDropDownOpen
          ?
          <>
            <img className={s["image-arrow"]} src={ArrowDropUp} alt="arrow up" />
            <ProfileSelect />
          </>
          :
          <img className={s["image-arrow"]} src={ArrowDropDown} alt="arrow down" />
        }
      </Button>
    </div>
  );
};

export default Profile;
