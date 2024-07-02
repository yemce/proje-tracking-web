import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent'
import ProjectList from './components/ProjectList';
import FacultyList from './pages/admin/deneme';
import Admin from './components/admin/Admin';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    setIsAdmin(window.location.pathname.startsWith('/admin'));
  },[window.location.pathname])

  return (
    <Router>
      <div>
        <NavbarComponent isAdmin={isAdmin}/>

      </div>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projeler" element={<ProjectList />} />
        <Route path="/fakulteler" element={<FacultyList />} />
        <Route path="/admin/*" element={<Admin/>} />
      </Routes>
    </Router>

  );
}

export default App;
