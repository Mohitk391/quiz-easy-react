import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">QUIZ EASY</Link>
            <div className="external-links">
                <i className="fa fa-moon" aria-hidden="true" title="Dark Mode"></i>
            </div>
        </nav>
    );
}

export { NavBar }