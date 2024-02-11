import React from 'react';
import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='html'>HTML</NavLink></li>
        <li><NavLink to='css'>CSS</NavLink></li>
        <li><NavLink to='javaScript'>JavaScript</NavLink></li>
      </ul>
    </div>
    <Routes>
        <Route index element={<Navigate replace to="html" />} />
        <Route path="html" element={<HTML />} />
        <Route path="css" element={<CSS />} />
        <Route path="javaScript" element={<JavaScript />} />
      </Routes>
  </div>
);

export default Courses;