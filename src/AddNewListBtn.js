import { Link } from "react-router-dom"

const AddNewListBtn = () => {
  return (
    <div className="list-settings">
        <Link to="newList"><button><b>Add list</b></button></Link>
    </div>
  )
}

export default AddNewListBtn