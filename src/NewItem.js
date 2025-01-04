import CreateNewItem from "./CreateNewItem";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

const NewItem = ({ activeList, setActiveList, search, setSearch }) => {
        
    return (
        <form className="new-task-div" onSubmit={(e)=>{e.preventDefault()}}>
            <CreateNewItem activeList={activeList} setActiveList={setActiveList} />
            <div className="add-items-wrapper">
                <Link to="/createNewItem">
                <FaPlusSquare 
                    role="button"
                />
                </Link>
            </div>
            <div className="search-item">
                <input 
                    type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search item"
                    value={search}
                />
            </div>
        </form>
    )
  }
  
export default NewItem