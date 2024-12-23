import Task from "./Task";

const TasksList = ({ activeList, setActiveList, columnCompleted, search }) => {
  return (
    <section>
      <div>
        <h3>{columnCompleted ?  "Done" : "Pending" }</h3>
      </div>
      {Object.entries(activeList["list"]).map( ([ key, item ]) => {
        if (item.completed === columnCompleted && item.name.toLowerCase().includes(search.toLowerCase())) {
          return <Task key={item.id} activeList={activeList} setActiveList={setActiveList} item={item} columnCompleted={columnCompleted}/>
        } 
      })}
    </section>
  )
}

export default TasksList