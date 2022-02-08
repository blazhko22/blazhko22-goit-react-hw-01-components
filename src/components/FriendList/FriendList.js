import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendList.module.css';
export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.friendListItem} key={id}>
          <FriendsListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  id: PropTypes.number,
};
