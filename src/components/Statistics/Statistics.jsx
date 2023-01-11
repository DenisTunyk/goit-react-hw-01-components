import PropTypes from 'prop-types';
import css from './Statistics.module.css';

import getColor from './../../function/function';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }



export const Statistics = ({ title, stats }) => {
    function isTitle() {
        if (!title) return "none";
    }

    return (
<section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}
  
  <ul className={css.statList}>
    {stats.map(({id, label, percentage}) => (
        <li className={css.item} key={id} style={{ backgroundColor: getColor(), borderTop: isTitle() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    ))}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}