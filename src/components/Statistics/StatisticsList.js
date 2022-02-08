import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsListItem({ label, percentage }) {
  return (
    <div className={s.ItemContainer}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
