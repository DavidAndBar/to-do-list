import { Link } from "react-router-dom";
import NavLists from "./NavLists";
import UserProfile from "./UserProfile";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const Nav = ({ isAuth, activeList, setActiveList, lists, username }) => {
  const [editActive, setEditActive] = useState(false);
  const [newTitle, setNewTitle] = useState(activeList.title);

  const handleEdit = () => {
    setEditActive(!editActive)
    if (!editActive) {
      setNewTitle(activeList.title)
    } else{
      const newActiveList = { ...activeList };
      newActiveList["title"] = newTitle;
      setActiveList(newActiveList);
    } 
  }

  const handleEnter = (e)=> {
    if(e.key === "Enter"){
      handleEdit();
    }
  }

  return (
    <>{ isAuth ?  <nav>
                    <NavLists activeList={activeList} setActiveList={setActiveList} lists={lists}/>
                    <hr/>
                    <h1 id="listTitle">
                        { editActive ? <><input 
                                            type="text"
                                            value={newTitle}
                                            onChange={(e)=>setNewTitle(e.target.value)}
                                            onKeyDown={handleEnter}
                                          /></> : 
                                      <Link to="/">{activeList.title}</Link>}
                        <div className="edit-button"><FaEdit role='button' onClick={handleEdit}/></div>
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