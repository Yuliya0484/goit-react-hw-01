import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;