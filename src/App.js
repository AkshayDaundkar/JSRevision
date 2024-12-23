import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import CodeExample from './components/CodeExample';
import { examples, exampleGroups } from './data/examples';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [openGroups, setOpenGroups] = React.useState({});

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleGroup = (groupId) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <HashRouter>
      <div className="App">
        <div className={`layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <button 
            className="menu-toggle" 
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <h1>JS Topics</h1>
            <ul className="nav-links">
              {Object.entries(exampleGroups).map(([groupName, group]) => (
                <li key={group.id}>
                  <div 
                    className="group-header" 
                    onClick={() => toggleGroup(group.id)}
                  >
                    <span>{groupName}</span>
                    <span className={`arrow ${openGroups[group.id] ? 'open' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {openGroups[group.id] && (
                    <ul className="sub-nav">
                      {group.items.map(item => (
                        <li key={item.path}>
                          <Link 
                            to={item.path} 
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={
                <div className="welcome-screen">
                  <h1>JavaScript Revision - Akshay Daundkar</h1>
                  <p>Explore modern JavaScript concepts with interactive example, Akshay Lets Revise It.</p>
                </div>
              } />
              {examples.map((example) => (
                <Route
                  key={example.path}
                  path={example.path}
                  element={
                    <CodeExample
                      key={example.path}
                      title={example.title}
                      description={example.description}
                      code={example.code}
                    />
                  }
                />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
