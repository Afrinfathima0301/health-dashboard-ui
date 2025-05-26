import styles from "./DashboardMainContent.module.css";
import AnatomySection from "./AnatomySection.jsx";
import HealthStatusCards from "./HealthStatusCards.jsx";
import CalendarView from "./CalendarView.jsx";
import AppointmentCards from "./SimpleAppointmentCard.jsx";
import UpcomingSchedule from "./UpcomingSchedule.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import { activityData } from "../../data/activityData.js";
import { FiChevronDown } from "react-icons/fi";


const DashboardMainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.dashboardTop}>
          <h2>Dashboard</h2>
          <p>This Week <FiChevronDown/></p>
        </div>
        <div className={styles.topLeft}>
          <div className={styles.anatomySection}>
            <AnatomySection />
          </div>
          <div className={styles.healthCardsSection}>
            <HealthStatusCards />
          </div>
        </div>
        <div className={styles.activityFeed}>
               <ActivityFeed data={activityData} />
        </div>
      </div>

      <div className={styles.rightColumn}>
        <CalendarView />
           <AppointmentCards />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
