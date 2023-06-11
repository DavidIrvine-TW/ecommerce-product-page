import React from "react";
import { Link } from "react-router-dom";

function DesktopMenu() {
  
  return (
    <ul className="hidden desktop:flex gap-[2rem] ml-[3.5em] text-[1rem] w-[400px] ">

      <li className="desktop-list-item">
        <Link to="#">
          <button className="desktop-list-item py-[2.5rem] w-[70px] text-dgblue ">Collections</button>
        </Link>
      </li>

      <li className="desktop-list-item">
        <Link to="#">
          <button className="desktop-list-item py-[2.5rem] w-[70px] text-dgblue ">Men</button>
        </Link>
      </li>

      <li className="desktop-list-item">
        <Link to="#">
          <button className="desktop-list-item py-[2.5rem] w-[70px] border-b-4 border-orange text-vdblue font-bold">Woman</button>
        </Link>
      </li>

      <li className="desktop-list-item">
        <Link to="#">
          <button className="desktop-list-item py-[2.5rem] w-[70px] text-dgblue ">About</button>
        </Link>
      </li>

      <li className="desktop-list-item">
        <Link to="#">
          <button className="desktop-list-item py-[2.5rem] w-[70px] text-dgblue ">Contact</button>
        </Link>
      </li>

    </ul>
  );
}

export default DesktopMenu;
