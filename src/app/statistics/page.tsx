import classes from './page.module.css';
import ProgressStatistic from './_components/progress-statistic';
import { Statistic } from '@/models/statistics';

export default function StatisticsPage() {
  let statistics: Statistic[] = [
    {
      key: 'sta-1',
      title: 'Total Missions',
      subtitle: '156',
      progress: 74
    },
    {
      key: 'sta-2',
      title: 'Rituals',
      subtitle: '16',
      progress: 30
    }
  ];

  return (
    <>
      <h1>Statistics</h1>
      <div className={classes.statistics}>
        {statistics.map((element) => (
          <ProgressStatistic
            key={element.key}
            title={element.title}
            subtitle={element.subtitle}
            progress={element.progress}
          />
        ))}
      </div>
    </>
  );
}