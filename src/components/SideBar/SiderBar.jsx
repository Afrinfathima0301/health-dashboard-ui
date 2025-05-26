import styles from './SideBar.module.css';
import { BsFillGridFill,BsChatDots } from "react-icons/bs";
import { FaHistory, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';
import { MdOutlineEventAvailable,MdSupportAgent } from 'react-icons/md';
import { CiSettings } from "react-icons/ci";
export default function SideBar({isOpen}){
    return (
    <aside className={`${styles.sidebar} ${isOpen? styles.open:''}`}>
        <div className={styles.topmenu}>
            <p className={styles.title}>General</p>
            <ul className={styles.menu}>
                <li className={`${styles.list} ${styles.active}`}><BsFillGridFill className={styles.listitem}/> Dashboard</li>
                <li className={styles.list}><FaHistory className={styles.listitem} />History</li>
                <li className={styles.list}><FaRegCalendarAlt className={styles.listitem} />Calander</li>
                <li className={styles.list}><MdOutlineEventAvailable className={styles.listitem} />Appointment</li>
                <li className={styles.list}><FaChartBar className={styles.listitem} />Statistics</li>
            </ul>
          <p className={styles.title}>Tools</p>
          <ul className={styles.menu}>
              <li className={styles.list}><BsChatDots className={styles.listitem} />Chat</li>
              <li className={styles.list}><MdSupportAgent className={styles.listitem} />Support</li>
          </ul>
           <div>
            <ul>
              <li className={styles.list}><CiSettings className={styles.listitem}  />Settings</li>
           </ul>
        </div>
        </div>
    </aside>
);
}