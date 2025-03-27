import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg w-75 bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <CiSearch />
          </button>
        </form>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Agam
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <CiHeart />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <CiSettings />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
