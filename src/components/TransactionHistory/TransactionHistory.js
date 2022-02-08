import PropTypes from 'prop-types';
import TransactionTableItem from './TransactionTableItem ';
import s from './TransactionHistory.module.css';
export default function TransactionTable({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id} className={s.tbody}>
          <TransactionTableItem
            type={type}
            amount={amount}
            currency={currency}
          />
        </tbody>
      ))}
    </table>
  );
}
TransactionTable.propTypes = {
  id: PropTypes.string,
};
