import { Link } from "react-router-dom"
import { useState } from "react"
import apiRequest from "./functions/apiRequest"
import { useNavigate } from "react-router-dom";

const MainCreateNewList = ({ url, lists, setActiveList }) => {
    const [ listName, setListName ] = useState('')
    
    const navigate = useNavigate();

    const handleAddList = async () => {
        document.getElementById("btn-add-list").disabled = true;
        if (!!listName) {            
            const listsNow = lists;
            /* Checks what id's are taken */
            const usedListIds = listsNow.map( (element) => {
                return element.id;
            })

            let listId = ""
            /* Checks each possible id value from 1 to the length + 1
            This logic prevents any duplicate id */
            for (let i = 1; i <= usedListIds.length + 1; i++) {
                if(!!!usedListIds.includes(`list${i}`)){
                    listId = `list${i}`;
                    break;
                }
            }
            
            const newList = {
                "id": listId,
                "list": [],
                "title": listName
            }

            const postOptions = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newList)
            }

            await apiRequest(url, postOptions);
            
            setActiveList(newList)
            setListName('')
            navigate("/");
        }
    }

    return (
        <main>
            <div className="new-list">
                <label>Add new list</label>
                <input 
                    type="text"
                    placeholder="List's name"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                />
                <div>
                    <Link ><button type="button" className="btn-add-list" onClick={handleAddList} id="btn-add-list" >Add new list</button></Link>
                    <Link to="/"><button type="button" className="btn-cancel">Cancel</button></Link>
                </div>
            </div>
        </main>
    )
}

export default MainCreateNewList