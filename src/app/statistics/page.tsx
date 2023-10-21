import classes from './page.module.css';

export default function StatisticsPage() {
  return (
    <>
      <h1>Statistics</h1>
      <div className={classes.statistic}>
        <div className="missions">
          <div className={classes.status}>
            <div className="info">
              <h3>Total Missions</h3>
              <h1>156</h1>
            </div>
            <div className={classes.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={classes.percentage}>
                <p>+66%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}