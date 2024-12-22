import TasksList from "./TasksList";
import NewItem from "./NewItem";

const MainContent = ({ activeList , setActiveList }) => {
  return (
    <main>
        {activeList ? <><NewItem activeList={activeList} setActiveList={setActiveList}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={false}/>
                        <TasksList activeList={activeList} setActiveList={setActiveList} columnCompleted={true}/></> 
                    : <></>}
    </main>
  )
}

export default MainContent;