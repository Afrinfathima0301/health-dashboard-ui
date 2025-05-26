import styles from "./DashboardMainContent.module.css";
import appointments from "../../data/appointmentsData.js";


const SimpleAppointmentCard = () => {
  return (
    <div className={styles.appointmentCardsContainer}>
      {appointments.map(({ type, image, time, doctor, bgColor }, idx) => (
        <div
          key={idx}
          className={`${styles.appointmentCard} ${bgColor ? styles.coloredCard : ""}`}
        >
          <div className={styles.appointmentTopRow}>
            <h3>{type}</h3>
            <img src={image} alt={`${type} icon`} className={styles.appointmentIcon} />
          </div>
          <div className={styles.time}>{time}</div>
          <div className={styles.doctor}>{doctor}</div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAppointmentCard;
