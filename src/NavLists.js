import { FaPlusSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavLists = ( { activeList, setActiveList, lists } ) => {
  const handleChangeList = (e) => {
    const newActiveList = lists.filter((list) => list.id === e.target.value )
    setActiveList(newActiveList[0])
    
  }

  const handleAddList = () => {
    
  }

  
  return (
    <div className="select-active-list">
      <div>
        <label htmlFor="active-list"><b>Active list</b></label>
        <select name="active-list" onChange={handleChangeList}>
          <option value={activeList.id}>{activeList.title}</option>
          {!!lists && lists.map( (item) => {
            return activeList.title !== item.title && <option key={item.id} value={item.id}> {item.title} </option>
          })}
        </select>
      </div>
      <div>
        <p><b>Add list</b></p>
        <div className="add-button">
          <Link to="newList">
            <FaPlusSquare 
                role="button"
                onClick={handleAddList}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavLists