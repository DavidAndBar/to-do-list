import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const Task = ({ activeList, setActiveList, item, columnCompleted }) => {
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

  return (
    <article>
      <div>
        <input 
          type="checkbox" 
          defaultChecked={item.completed}
          onChange={updateChecked}
        />
      </div>
      <p style={{textDecorationLine: `${item.completed ? "line-through" : "none" }`}}>
        {item.name}
        {item.date ? <span> - {item.date}</span> : <></>}
      </p>
      <div className="edit-button">
        {!!!columnCompleted && <FaEdit role='button'/>}
      </div>
      <div className="delete-button">
        <FaTrashAlt 
          role='button' 
          onClick={updateDeleted}
        />
      </div>
    </article>
  )
}

export default Task