import { useState } from "react"
import { FaPlusSquare } from 'react-icons/fa'

const NewItem = ({ activeList, setActiveList, search, setSearch }) => {
    const EMPTYITEM = {"id": "", "name": "", "completed": false, "dueDate": null};
    const [newBody, setNewBody] = useState("") 
    const [newDate, setNewDate] = useState("")

    const pushItem = () => {
        if (!!newBody.trim()) {
            const newItem = { ...EMPTYITEM };
            
            /* Checks what id's are taken */
            const usedIds = activeList["list"].map( (element) => {
                return element.id;
            })

            /* Checks each possible id value from 1 to the length + 1
            This logic prevents any duplicate id */
            for (let i = 1; i <= usedIds.length + 1; i++) {
                if(!!!usedIds.includes(i)){
                    newItem.id = i;
                    break;
                }
            }
            /* Set the rest of the values */
            newItem.name = newBody;
            newItem.dueDate = newDate ? newDate : null;
            const newList = activeList["list"]
            newList.push(newItem)
            setActiveList({
                "list": newList,
                "id": activeList["id"],
                "title": activeList["title"] 
            })
            
            setNewBody('')
            setNewDate('')
        }
    }
    
    return (
        <form onSubmit={(e)=>{e.preventDefault();pushItem()}}>
            <div>
                <input 
                    type="text"
                    onChange={(e)=>setNewBody(e.target.value)}
                    placeholder="Add new to-do task"
                    value={newBody}
                />
                <label> Due date: </label>
                <input 
                    type="date"
                    value={newDate}
                    onChange={(e)=>setNewDate(e.target.value)}
                />
                <div className="add-button">
                    <FaPlusSquare 
                        role="button"
                        onClick={pushItem}
                    />
                </div>
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