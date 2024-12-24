import { FaThLarge } from 'react-icons/fa'
import AddNewListBtn from './AddNewListBtn'
import SelectActiveList from './SelectActiveList'
import { Link } from 'react-router-dom'

const NavLists = ( { activeList, setActiveList, lists } ) => {

  
  return (
    <div className="select-active-list">
      <SelectActiveList activeList={activeList} setActiveList={setActiveList} lists={lists}/>
      <div className="opts-wrapper">
        <Link to="/options">
          <FaThLarge 
            role="button"
          />
        </Link>
      </div>
      <AddNewListBtn />
      

    </div>
  )
}

export default NavLists