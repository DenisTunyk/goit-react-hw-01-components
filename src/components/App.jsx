import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Statistics } from "./Statistics/Statistics";
import { Profile } from "./Profile/Profile";
import { FrendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  //console.log(user)
  return (
    <div>
      <Profile username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
