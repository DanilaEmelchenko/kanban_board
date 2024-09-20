import s from './ProfileSelect.module.scss';
import Image from '../../../assets/icons/icon.svg';

const ProfileSelect = () => {
  const arraySelect = [{ id: 1, text: 'Profile', link: '#' }, { id: 2, text: 'Log Out', link: '#' }];

  return (
    <div>
      <img className={s['image']} src={Image} alt="image" />
      <div className={s['select']}>
        {arraySelect.map(select => (
          <a href={select.link} key={select.id} className={s['select-link']}>{select.text}</a>
        ))}
      </div>
    </div>
  );
}

export default ProfileSelect;