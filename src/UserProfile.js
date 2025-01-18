import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
const UserProfile = ({ isAuth, username }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    document.cookie = "token=;";
    document.cookie = "username=;";
    console.log("Logout");
    
    window.location.href = '/';
  }
  
  return (
    <div className="user-profile">
      <div className="profile-icon profile-mobile icon-button">
        <Link to="/">
                  <FaUserCircle 
                      role="button"
                  />
        </Link>
      </div>
      { isAuth ? <><p><span className="profile-mobile">{username}&nbsp;</span><a href="/" onClick={handleLogout}>logout</a></p></> : <p><a href="/">login</a></p>}
    </div>
  )
}

export default UserProfile