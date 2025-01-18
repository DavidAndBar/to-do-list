import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useState } from 'react';

const Task = ({ activeList, setActiveList, item, columnCompleted }) => {
  const [editActive, setEditActive] = useState(false);
  const [newDesc, setNewDesc] = useState('');
  
  
  const updateChecked = (e) =>{
    const newActiveList = { ...activeList };
    const itemIndex = newActiveList["list"].indexOf(item);
    newActiveList["list"][itemIndex].completed = !newActiveList["list"][itemIndex].completed
    setActiveList(newActiveList)    
  }

  const updateDeleted = (e) => {
    const newActiveList = { ...activeList };
    newActiveList["list"] = newActiveList["list"].filter( (items) => items!==item)
    setActiveList(newActiveList)
    
  }

  const handleEdit = () => {
    setEditActive(!editActive)
    if (!editActive) {
      setNewDesc(item.name)
    } else{
      const newActiveList = { ...activeList };
      const itemIndex = newActiveList["list"].indexOf(item);
      newActiveList["list"][itemIndex].name = newDesc;
      setActiveList(newActiveList)
    } 
  }

  const handleEnter = (e)=> {
    if(e.key === "Enter"){
      handleEdit();
    }
  }
  return (
    <article>
      <div>
        <input 
          type="checkbox" 
          defaultChecked={item.completed}
          onChange={updateChecked}
        />
      </div>
      {editActive ? <><input 
                          type="text"
                          value={newDesc}
                          onChange={(e)=>setNewDesc(e.target.value)}
                          onKeyDown={handleEnter}
                        /></> : 
                    <p style={{textDecorationLine: `${item.completed ? "line-through" : "none" }`}}>
                      {item.name}
                      {item.dueDate ? <span> - {item.dueDate}</span> : <></>}
                    </p>}
      <div className="edit-button icon-button">
        {!!!columnCompleted && <FaEdit role='button' onClick={handleEdit}/>}
      </div>
      <div className="delete-button icon-button">
        <FaTrashAlt 
          role='button' 
          onClick={updateDeleted}
        />
      </div>
    </article>
  )
}

export default Task