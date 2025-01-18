import CreateNewItem from "./CreateNewItem";
import { Link } from "react-router-dom";
import { FaPlusSquare, FaSearch } from "react-icons/fa";

const NewItem = ({ activeList, setActiveList, search, setSearch }) => {
    
    const hideSearch = () => {
        if (window.screen.width <=500) {
            document.querySelector(".create-new-item").style.display = "flex";
            document.querySelector(".search-item").style.display = "none";
            document.querySelector(".search").style.display = "block";
        }
    }

    const showSearch = () => {
        if (window.screen.width <=500) {
            document.querySelector(".create-new-item").style.display = "none";
            document.querySelector(".search").style.display = "none";
            document.querySelector(".search-item").style.display = "block";
            document.querySelector(".search-item > input").focus();

        }
    }

    return (
        <form className="new-task-div" onSubmit={(e)=>{e.preventDefault()}}>
            <CreateNewItem activeList={activeList} setActiveList={setActiveList} />
            {/*<div className="add-items-wrapper icon-button">
                <Link to="/createNewItem">
                <FaPlusSquare 
                    role="button"
                />
                </Link>
            </div>*/}
            
            <div className="search-item">
                <input 
                    type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search item"
                    value={search}
                    onBlur={hideSearch}
                />
            </div>
            <div className="search icon-button">
                <FaSearch 
                    role="button"
                    onClick={showSearch}
                />
            </div>
        </form>
    )
  }
  
export default NewItem