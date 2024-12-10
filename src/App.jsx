import Profile from "./assets/components/Profile/Profile";
import userData from "./assets/data/userData.json";
import friends from "./assets/data/friends.json";
import transactions from "./assets/data/transactions.json";
import FriendList from "./assets/components/FriendList/FriendList";
import TransactionHistory from "./assets/components/TransactionHistory/TransactionHistory";

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
