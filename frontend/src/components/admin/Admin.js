import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavbarComponent from '../NavbarComponent';
import ProjectManagement from './Project/ProjectManagement';
import StudentManagement from './Student/StudentManagement';
import StaffManagement from './Staffs/StaffManagement';
import DepartmentManagement from './Department/DepartmentManagement';
import FacultyManagement from './Faculty/FacultyManagement';
import ProjectTypeManagement from './ProjectType/ProjectTypeManagement';

function Admin() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<ProjectManagement />} />
        <Route path="/projeler" element={<ProjectManagement />} />
        <Route path="/ogrenciler" element={<StudentManagement />} />
        <Route path="/bolumler" element={<DepartmentManagement />} />
        <Route path="/akademik-personel" element={<StaffManagement />} />
        <Route path="/fakulteler" element={<FacultyManagement />} />
        <Route path="/proje-turleri" element={<ProjectTypeManagement />} />
        <Route path="*" element={<Navigate to="/admin" />} />
        
      </Routes>
    </div>

  );
}

export default Admin;
