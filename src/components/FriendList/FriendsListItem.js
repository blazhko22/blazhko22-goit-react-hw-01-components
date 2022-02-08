import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function StatisticsListItem({
  avatar,
  name,
  isOnline = 'false',
}) {
  return (
    <div className={s.itemContainer}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

StatisticsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
