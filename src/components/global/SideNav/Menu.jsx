import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ListItemBody = ({ config }) => {
  return (
    <>
      <ListItemIcon>{config.icon}</ListItemIcon>
      <ListItemText primary={config.title} />
    </>
  );
};

const MenuItem = ({ config, subLink }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={config.path}
      className={`${subLink ? "subLink" : ""} ${
        pathname.split("/")[2] === config.keyForActive ? "activeLink" : ""
      }`}
    >
      <ListItem button>
        <ListItemBody config={config} />
      </ListItem>
    </Link>
  );
};

const ExpandableMenuItem = ({ config, subLink }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div component="nav">
      <ListItem button color="#f1f1f1" onClick={handleClick}>
        <ListItemBody config={config} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Menu items={config.items} subLink={subLink} />
      </Collapse>
    </div>
  );
};

export default function Menu({ items, subLink }) {
  const createList = (items) => {
    let menu = [];
    items?.map((menuItem) => {
      if (Array.isArray(menuItem.items) && menuItem.items.length > 0) {
        menu.push(
          <ExpandableMenuItem
            subLink={true}
            config={menuItem}
            key={menuItem.title}
          />
        );
      } else {
        menu.push(
          <MenuItem subLink={subLink} config={menuItem} key={menuItem.title} />
        );
      }
    });
    return menu.concat();
  };

  return <List>{createList(items)}</List>;
}
