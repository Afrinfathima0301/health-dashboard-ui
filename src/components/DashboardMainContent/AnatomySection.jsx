import styles from "./DashboardMainContent.module.css";

const AnatomySection = () => {
  return (
    <div className={styles.anatomyContainer}>
      <img src='./images/anatomy.png' alt="Anatomy" className={styles.anatomyImage} />
      <div className={`${styles.indicator} ${styles.heart}`}>
        ❤️ Healthy Heart
      </div>
      <div className={`${styles.indicator} ${styles.leg}`}>
        🦵 Healthy Leg
      </div>
    </div>
  );
};

export default AnatomySection;
