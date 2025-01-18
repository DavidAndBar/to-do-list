import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateNewItem = ( { activeList, setActiveList } ) => {
    const EMPTYITEM = {"id": "", "name": "", "completed": false, "dueDate": null};
    const [newBody, setNewBody] = useState("");
    const [newDate, setNewDate] = useState("");
    const navigate = useNavigate();

    const pushItem = () => {
        if (!!newBody.trim() && activeList) {
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
            navigate('/')
        }
    }
    
    const handleEnter = (e)=> {
        if(e.key === "Enter"){
          pushItem();
        }
    }
    
    return (
    <div className="create-new-item">
                <input 
                    type="text"
                    onChange={(e)=>setNewBody(e.target.value)}
                    placeholder="Add new to-do task"
                    value={newBody}
                    onKeyDown={handleEnter}
                />
                <div className="due-date-div">
                    <label> Due date: </label>
                    <input 
                        type="date"
                        value={newDate}
                        onChange={(e)=>setNewDate(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </div>
                <div className="add-button icon-button">
                    <FaPlusSquare 
                        role="button"
                        onClick={pushItem}
                    />
                </div>
    </div>
  )
}

export default CreateNewItem