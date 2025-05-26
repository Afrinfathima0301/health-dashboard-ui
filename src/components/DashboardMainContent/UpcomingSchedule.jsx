import styles from "./DashboardMainContent.module.css";
import scheduleData from "../../data/upcomingScheduleData";

const UpcomingSchedule = () => {
  return (
    <div className={styles.upcomingScheduleContainer}>
      <h2 className={styles.scheduleTitle}>Upcoming Schedule</h2>
      {scheduleData.map((section, index) => (
        <div key={index} className={styles.scheduleSection}>
          <h4 className={styles.scheduleDay}>On {section.day}</h4>
          <div className={styles.scheduleCards}>
            {section.cards.map((card, idx) => (
              <div key={idx} className={styles.scheduleCard}>
                <div className={styles.cardTopRow}>
                  <h3>{card.title}</h3>
                    <span className={styles.cardIcon}>{card.image}</span>
                </div>
                <div className={styles.cardTime}>{card.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
