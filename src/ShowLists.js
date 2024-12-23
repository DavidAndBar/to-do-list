import { useState } from "react"
import NewItem from "./NewItem"
import TasksList from "./TasksList"

const ShowLists = ({ activeList, setActiveList }) => {
  const [ search, setSearch ] = useState('');
  
  
  return (
    <>
        {activeList ? <><NewItem activeList={activeList} setActiveList={setActiveList} search={search} setSearch={setSearch}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={false} search={search}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={true} search={search}/></> 
                    : <></>}
    </>
  )
}

export default ShowLists