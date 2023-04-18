import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


function Sidebar() {

  return (
    <div className="sidebar">
      <ul>
        <li>  <Link to='/'> <a href='/' >My Recommendations</a> </Link></li>
        <li>        <Link to='/insightshub'><a href='/'>InsightsHub</a>    </Link></li>
        <li><a href='/' >My Companies</a></li>
        <li><a href='/'>Find and Share</a></li>
        <li><a href='/'>Preference</a></li>
      </ul>
    </div>
  )
}

export default Sidebar

