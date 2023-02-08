import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={css.item}
            key={id}
            style={{ background: colors[index] }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
