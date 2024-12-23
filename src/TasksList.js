import Task from "./Task";

const TasksList = ({ activeList, setActiveList, columnCompleted, search }) => {
  const tasks = Object.entries(activeList["list"]).map( ([ key, item ]) => {
    if (item.completed === columnCompleted && item.name.toLowerCase().includes(search.toLowerCase())) {
      return <Task key={item.id} activeList={activeList} setActiveList={setActiveList} item={item} columnCompleted={columnCompleted}/>
    } 
  })
  
  return (
    <section>
      <div>
        <h3>{columnCompleted ?  "Done" : "Pending" }</h3>
      </div>
      {tasks.length !== 0 ? tasks : <p style={{textAlign:"center"}}>No tasks here</p>}
    </section>
  )
}

export default TasksList