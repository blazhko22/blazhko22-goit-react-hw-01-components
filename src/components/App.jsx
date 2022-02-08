import user from '../data/user.json';
import transactions from "../data/transactions.json"
import friends from "../data/friends.json"
import data from "../data/data.json"

import Profile from './Profile/Profile';
import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"
import TransactionTable from "./TransactionHistory/TransactionHistory"

import s from './Profile/Profile.module.css';

export const App = () => {
  return (
    <div>
      <Section>
      <div className={s.App}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />{' '}
      </div>
      </Section>
      <Section title="UPLOAD STATS">
        <Statistics stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionTable items={transactions} />
      </Section>
    </div>
  );
};
