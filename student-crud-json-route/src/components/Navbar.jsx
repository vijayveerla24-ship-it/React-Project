import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
        <h2>Student Result Portal</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/add-student">Add Student</Link>
        </div>
    </nav>
  )
}