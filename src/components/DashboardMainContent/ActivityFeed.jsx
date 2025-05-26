import styles from './DashboardMainContent.module.css';
import { activityData } from "../../data/activityData.js";  

const ActivityFeed = () => {
  const totalBars = 4;
  return (
    <div className={styles.activityCard}>
      <div className={styles.activityHeader}>
        <h3 className={styles.activityTitle}>Activity</h3>
        <span className={styles.activitySubtitle}>3 appointments this week</span>
      </div>
      <div className={styles.activityChart}>
        {activityData.map((item, index) => {
          const bookedBars = item.bars;
          const emptyBarsCount = totalBars - bookedBars.length;

          const emptyBars = Array(emptyBarsCount).fill({
            heightClass: 'medium',
            colorClass: 'gray',
          });

          const allBars = [...bookedBars, ...emptyBars];

          return (
            <div key={index} className={styles.activityDayColumn}>
              <div className={styles.activityBars}>
                {allBars.map((bar, idx) => (
                  <div
                    key={idx}
                    className={`${styles.activityBar} ${styles[bar.heightClass]} ${styles[bar.colorClass]}`}
                  />
                ))}
              </div>
              <span className={styles.activityDayLabel}>{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
