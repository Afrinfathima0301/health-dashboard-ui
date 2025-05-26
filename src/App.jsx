import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SiderBar.jsx';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent.jsx';
function App(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
    return(
        <>
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className={`dashboardContent ${isSidebarOpen ? 'sidebarOpen' : ''}`}>
  {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
  <SideBar isOpen={isSidebarOpen} />
  <DashboardMainContent />
</div>
        </>
    );
}
export default App;