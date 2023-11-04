import { Link } from "react-router-dom";

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import MhcLogo from "../../assets/mhc_logo.png";

import URL from "../../config/url";

import "./SideNav.scss";

function SideNav() {
  let menus = [
    {
      id: "ads",
      label: "Ads",
      icon: <AdsClickIcon />,
      link: "/ads",
      type: "link",
    },
  ];

  let settings = [
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
      link: "/settings",
      type: "link",
    },
    {
      id: "logout",
      label: "Logout",
      icon: <ExitToAppIcon />,
      link: "",
      click: function () {
        window.location.assign(`${URL.website()}`);
      },
      type: "button",
    },
  ];

  return (
    <Box className="side-nav-holder" position="fixed">
      <Container maxWidth="false">
        <Box className="logo-holder">
          <Box component="img" alt="RMC Logo" src={MhcLogo} />
        </Box>
        <Box className="side-menu-holder">
          <Typography className="menu-label">MENU</Typography>
          <List disablePadding>
            {menus.map((item, key) => (
              <ListItem key={key} disablePadding disableGutters>
                <ListItemButton
                  disableGutters
                  {...(item.type === "link" && { component: Link })}
                  {...(item.type === "link" && { to: item.link })}
                  {...(item.type === "button" && { onClick: item.click })}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography className="menu-label">SETTINGS</Typography>
          <List disablePadding>
            {settings.map((item, key) => (
              <ListItem key={key} disablePadding disableGutters>
                <ListItemButton
                  disableGutters
                  {...(item.type === "link" && { component: Link })}
                  {...(item.type === "link" && { to: item.link })}
                  {...(item.type === "button" && { onClick: item.click })}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}

export default SideNav;
