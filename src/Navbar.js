import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img
          alt=""
          src="logo-yellow.png"
          width="40"
          height="40"
          className="d-inline-block align-center"
        />
        <span className="site-title">Home</span>
      </Link>
      <ul>
        <CustomLink to="/groups">Groups</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }, ...props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
