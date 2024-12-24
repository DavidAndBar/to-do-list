import { useNavigate } from "react-router-dom"

const SelectActiveList = ({ activeList, setActiveList, lists, advancedOptions }) => {
  const navigate = useNavigate()  
  
  const handleChangeList = (e) => {
        const newActiveList = lists.filter((list) => list.id === e.target.value )
        setActiveList(newActiveList[0])
        navigate('/')
        }


  return (
    <div className="list-settings">
        <label htmlFor="active-list"><b>{advancedOptions ? "Select active list: " : "Active list: "}</b></label>
        <select name="active-list" onChange={handleChangeList}>
          <option value={activeList.id}>{activeList.title}</option>
          {!!lists && lists.map( (item) => {
            return activeList.title !== item.title && <option key={item.id} value={item.id}> {item.title} </option>
          })}
        </select>
    </div>
  )
}

export default SelectActiveList