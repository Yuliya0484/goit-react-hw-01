import Profile from "./assets/components/Profile/Profile";
import FriendList from "./assets/components/FriendList/FriendList";
import userData from "./assets/data/userData.json";
import friends from "./assets/data/friends.json";
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
FriendList;
export default App;
