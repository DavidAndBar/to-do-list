import { Link } from "react-router-dom";
import NavLists from "./NavLists";
import UserProfile from "./UserProfile";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import apiRequest from "./functions/apiRequest";

const Nav = ({ URL, isAuth, activeList, setActiveList, lists, setLists, username }) => {
  const [editActive, setEditActive] = useState(false);
  const [newTitle, setNewTitle] = useState(activeList.title);

  const deleteList = async (listid) => {  
    const url = `${URL}/delete/list/${username}/${listid}`
    const deleteOptions = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
    }
    await apiRequest(url, deleteOptions);
  }

  const updateDeleted = () => {
    if (window.confirm("Are you sure to delete this list?")){
      const newLists = Object.values(lists).filter( item => item.id !== activeList.id);
      if (!!!newLists[0]) {
        alert("You cannot delete the only list in your account. Try renaming it.");
      } else {
        deleteList(activeList.id).then( () => {
          setActiveList(newLists[0])
          setLists(newLists)
        })
      }
    }
  }

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
                        <div className="delete-button"><FaTrashAlt role='button' onClick={updateDeleted} /></div>
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