import { Link } from "react-router-dom";

const Nav = ({ links }) => {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
