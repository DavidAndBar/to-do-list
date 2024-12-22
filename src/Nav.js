import NavLists from "./NavLists";
import UserProfile from "./UserProfile";

const Nav = ({ activeList, setActiveList, lists }) => {
  return (
    <nav>
        <NavLists activeList={activeList} setActiveList={setActiveList} lists={lists}/>
        <hr/>
        <h1 id="listTitle">
            {activeList.title}
        </h1>
        <hr/>
        <UserProfile />
    </nav>
  )
}

export default Nav;