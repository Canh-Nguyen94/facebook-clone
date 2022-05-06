import { useState } from "react";
import {
  FaFacebook,
  FaSearch,
  FaVideo,
  FaHome,
  FaGamepad,
  FaFacebookMessenger,
  FaBell,
  FaDashcube
} from "react-icons/fa";
import { HiHome, HiUserGroup } from "react-icons/hi";
import Badge from '@mui/material/Badge';

function Header() {
  const [focus, setFocus] = useState(false);

  return (
    <div className="header">
      <div className="header-search">
        <input
          type="text"
          id="input"
          placeholder="Search on facebook"
          required
        />
        <label className="logo-input" for="input"></label>
        <label className="logo-blue" for="input">
          <FaFacebook />
        </label>
      </div>
      <div className="header-menu">
        <ul>
          <li className="logo-grey">
            <a href="">
              <HiHome />
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
              <FaVideo />
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
              <FaHome />
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
              <HiUserGroup />
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
              <FaGamepad />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-user">
        <ul>
          <li className="logo-grey">
            <a href="">
              <HiHome />
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
            <Badge badgeContent={4} color="error" overlap="circular">
              <FaFacebookMessenger />
              </Badge>
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
            <Badge badgeContent={4} color="error" overlap="circular">
              <FaBell />
              </Badge>
            </a>
          </li>
          <li className="logo-grey">
            <a href="">
              <FaDashcube />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
