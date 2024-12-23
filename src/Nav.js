import { Link } from "react-router-dom";
import NavLists from "./NavLists";
import UserProfile from "./UserProfile";

const Nav = ({ activeList, setActiveList, lists }) => {
  return (
    <nav>
        <NavLists activeList={activeList} setActiveList={setActiveList} lists={lists}/>
        <hr/>
        <h1 id="listTitle">
            <Link to="/">{activeList.title}</Link>
        </h1>
        <hr/>
        <UserProfile />
    </nav>
  )
}

export default Nav;