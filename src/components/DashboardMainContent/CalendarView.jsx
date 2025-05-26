import styles from "./DashboardMainContent.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const weekData = [
  { day: "Mon", date: 21, times: ["10:00", "11:00", "12:00"] },
  { day: "Tue", date: 22, times: ["8:00", "9:00", "10:00"], isToday: true, booked: "9:00" },
  { day: "Wed", date: 23, times: ["-", "11:00", "12:00"]},
  { day: "Thu", date: 24, times: ["-", "10:00", "11:00"], booked: "10:00" },
  { day: "Fri", date: 25, times: ["-", "-", "14:00"]},
  { day: "Sat", date: 26, times: ["12:00", "14:00", "15:00"], booked: "12:00" },
  { day: "Sun", date: 27, times: ["9:00", "10:00", "11:00"], booked: "9:00" },
];

const CalendarView = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h3>October 2025</h3>
        <div className={styles.navIcons}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /> 
    <polygon points="12 19 5 12 12 5" fill="#241461" />  
  </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />  
    <polygon points="12 5 19 12 12 19" fill="#241461" /> 
  </svg>

        </div>
      </div>

      <div className={styles.weekGrid}>
        {weekData.map((day, index) => (
          <div
            key={index}
            className={`${styles.dayColumn} ${
              day.isToday ? styles.today : ""
            }`}
          >
            <div className={styles.dayName}>{day.day}</div>
            <div className={styles.dayDate}>{day.date}</div>
            <div className={styles.timeSlots}>
              {day.times.map((time, i) => (
                <div
                  key={i}
                  className={`${styles.timeSlot} ${
                    time === day.booked ? styles.booked : ""
                  } ${time === "-" ? styles.empty : ""}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
