import { Statistic } from '@/models/statistics';

import classes from './progress-statistic.module.css';

export default function ProgressStatistic(props: Statistic) {
  const calculatedProgress = calculateProgress(props.progress);

  function calculateProgress(value: number) {
    if (value === 0) {
      return 'none';
    } else if (value > 0 && value < 50) {
      return 'low';
    } else if (value >= 50 && value < 75) {
      return 'medium';
    } else {
      return 'full';
    }
  }

  return (
    <>
      <div className={classes.statistic}>
      <div>
        <div className={classes.status}>
          <div className="info">
            <h3>{props.title}</h3>
            <h1>{props.subtitle}</h1>
          </div>
          <div className={`${classes.progress} ${classes[calculatedProgress]}`}>
            <svg>
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className={`${classes.percentage}`}>
              <p>{props.progress > 0 ? '+': '-'}{props.progress}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}