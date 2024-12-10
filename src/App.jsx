import Profile from "./components/Profile/Profile.jsx";
import userData from "./assets/data/userData.json";
import friends from "./assets/data/friends.json";
import transactions from "./assets/data/transactions.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

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
      <TransactionHistory items={transactions} />
    </>
  );
};
//FriendList;
export default App;
