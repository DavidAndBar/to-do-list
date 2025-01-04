import { Link } from "react-router-dom";
import NavLists from "./NavLists";
import UserProfile from "./UserProfile";

const Nav = ({ isAuth, activeList, setActiveList, lists, username }) => {
  return (
    <>{ isAuth ?  <nav>
                    <NavLists activeList={activeList} setActiveList={setActiveList} lists={lists}/>
                    <hr/>
                    <h1 id="listTitle">
                        <Link to="/">{activeList.title}</Link>
                    </h1>
                    <hr/>
                    <UserProfile isAuth={isAuth} username={username}/>
                  </nav> : 
                  <nav>
                    <h2> To do lists! </h2>
                  </nav>
    }</>
  )
}

export default Nav;