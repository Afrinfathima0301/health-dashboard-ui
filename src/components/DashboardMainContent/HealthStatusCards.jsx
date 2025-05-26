import styles from "./DashboardMainContent.module.css";
import healthData from "../../data/healthData";
import { FiArrowRight } from "react-icons/fi";

const HealthStatusCards = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {healthData.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={item.icon} alt={item.title} className={styles.icon} />
            <span className={styles.title}>{item.title}</span>
          </div>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.statusBar}>
            <span
                className={styles.status}
                style={{ backgroundColor: item.statusColor, width: item.progressWidth }}>    
             </span>
       </div>
        </div>
      ))}
      <p className={styles.details}>Details<FiArrowRight/></p>
    </div>
  );
};


export default HealthStatusCards;
