import './styling/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class='flex-container'>
        <Link class='item' to="/">Home</Link>
        <Link class='item' to="/posts">Posts</Link>
        <Link class='item' to="/projects">Projects</Link>
        <Link class='item' to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar