import Profile from "./assets/components/Profile/Profile";
import FriendList from "./assets/components/Friendlist/Friendlist";
import userData from "./assets/data/userData.json";

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
    </>
  );
};

export default App;
