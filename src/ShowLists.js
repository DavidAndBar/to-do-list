import NewItem from "./NewItem"
import TasksList from "./TasksList"

const ShowLists = ({ activeList, setActiveList }) => {
  return (
    <>
        {activeList ? <><NewItem activeList={activeList} setActiveList={setActiveList}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={false}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={true}/></> 
                    : <></>}
    </>
  )
}

export default ShowLists