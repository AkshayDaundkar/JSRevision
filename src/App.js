import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import CodeExample from './components/CodeExample';
import { examples } from './data/examples';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

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

  return (
    <HashRouter>
      <div className="App">
        <div className="layout">
          <button 
            className="menu-toggle" 
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <h1>JS Topics</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              {examples.map((example) => (
                <li key={example.path}>
                  <Link to={example.path} onClick={() => setIsSidebarOpen(false)}>
                    {example.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={
                <div className="welcome-screen">
                  <h1>JavaScript Revision</h1>
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
