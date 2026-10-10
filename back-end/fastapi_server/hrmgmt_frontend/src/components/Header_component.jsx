
import "./Header_com.css";
import {Link} from 'react-router-dom'
function Header_component() {
  return (
    <div>
      <div className="header">
        <Link to href="#">Home</Link>
        <Link to href="#">About us</Link>
        <Link to href="#">Contact us</Link>
      </div>
    </div>
  );
}

export default Header_component;
