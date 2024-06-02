import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import ProjectList from './components/ProjectList';
import FacultyList from './pages/admin/deneme';
import FilterBar from './components/FilterBar';

function App() {
  return (
  <>
    <div>
      <NavbarComponent/> <br></br>
    </div>
    <div>
      {/* <FilterBar/> */}
    </div>
    <div>
      <ProjectList/>
    </div> 
  </>
  );
}

export default App;
