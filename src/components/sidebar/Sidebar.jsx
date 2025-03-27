import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGrinStars, FaMusic } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="section">
      <div className="sidebar-left">
        <p className="top">
          <FaGrinStars className="icon" />
          <span className="Name ms-2">Spotifi</span>
        </p>
        <div className="left-options">
          <ul className="options-list">
            <a href="#">
              <li className="home">
                <CiHome /> Home
              </li>
            </a>
            <a href="#">
              <li className="songs">
                <FaMusic /> Songs
              </li>
            </a>
            <a href="#">
              <li className="artists">
                <IoPerson />
                Artists
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
