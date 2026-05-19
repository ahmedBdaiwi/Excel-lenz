import React, { useState } from "react";
import "../styles/sidebar.css";
import logoFull from "../assets/logo.png"
import {
  FaTachometerAlt,
  FaChartLine,
  FaWallet,
  FaCogs,
  FaBars,
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "collapsed"}`}>
      {/* HEADER */}
      <div className="sidebar-header">
        <img
          src={logoFull}
          alt="Excellenz Logo"
          className={`sidebarlogo`}
        />
        <p className={`logoText ${open ? "logoText--visible" : "logoText--hidden"}`}>
          Excellenz
        </p>
        {/* Date.now is here so the animation gets played everytime we open the sidebar */}
      </div>

      <div className="sidebar-item" onClick={() => setOpen(!open)}>
        <FaBars />
        {open && <span>Menü</span>}
      </div>

      {/* ITEMS */}

      <div className="sidebar-item">
        <FaTachometerAlt />
        {open && <span>Dashboard</span>}
      </div>

      <div className="sidebar-item">
        <FaChartLine />
        {open && <span>Umsatz</span>}
      </div>

      <div className="sidebar-item">
        <FaWallet />
        {open && <span>Finanzen</span>}
      </div>

      <div className="sidebar-item">
        <FaCogs />
        {open && <span>Einstellungen</span>}
      </div>
    </div>
  );
}