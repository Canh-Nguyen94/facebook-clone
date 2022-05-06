import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import {
  FaFacebook,
  FaSearch,
  FaVideo,
  FaHome,
  FaGamepad,
  FaFacebookMessenger,
  FaBell,
  FaDashcube,
} from "react-icons/fa";

function LeftBar() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList className="menu-list">
        <MenuItem className="menu-item" >
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem className="menu-item" >
          <FaGamepad />
          <span>Games</span>
        </MenuItem>
        <MenuItem className="menu-item" >
          <FaVideo />
          <span>Watch</span>
        </MenuItem>
        <MenuItem className="menu-item" >
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaGamepad />
          <span>Games</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaVideo />
          <span>Watch</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaGamepad />
          <span>Games</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaVideo />
          <span>Watch</span>
        </MenuItem>

        <Divider />
        <MenuItem className="menu-item">
          <FaDashcube />

          <span>Web Clipboard</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaGamepad />
          <span>Games</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaVideo />
          <span>Watch</span>
        </MenuItem>

        <MenuItem className="menu-item">
          <FaDashcube />

          <span>Web Clipboard</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaHome />
          <span>Home</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaGamepad />
          <span>Games</span>
        </MenuItem>
        <MenuItem className="menu-item">
          <FaVideo />
          <span>Watch</span>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default LeftBar;
