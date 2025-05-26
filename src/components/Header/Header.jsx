import styles from './Header.module.css';
import { BiSolidBell } from "react-icons/bi";
import { FiMenu,FiSearch,FiX, FiPlus } from 'react-icons/fi'; 

export default function Header({ onToggleSidebar,isSidebarOpen  }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoMenu}>
      <div className={styles.logo}>
        <span className={styles.health}>Health</span>
        <span className={styles.care}>care.</span>
      </div>
     {isSidebarOpen ? (
      <FiX className={styles.hamburger} onClick={onToggleSidebar} />
    ) : (
      <FiMenu className={styles.hamburger} onClick={onToggleSidebar} />
    )}
     </div>
     <div className={styles.searchActions}>
        <div className={styles.search}>
            <div className={styles.searchbox}>
            <FiSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search" />
            </div>
            <BiSolidBell className={styles.bellIcon} />
        </div>
        <div className={styles.actions}>
            <img src='./images/avatar.png'alt="Avatar" className={styles.iconAvatar}/>
            <FiPlus className={styles.icon} />
        </div>
      </div>
    </header>
  );
}
