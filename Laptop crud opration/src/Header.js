import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src="https://darshan.ac.in/Content/media/DU_Logo.svg" alt="" />
        </div>
        <div className="main">
          <div className="Link">
            <Link to="./">Home</Link>{" "}
          </div>
          <div className="Link">
            <Link to="./Laptop">All Laptop</Link>
          </div>
          <div className="Link">
            <Link to="./Laptop/add">Add Laptop</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
