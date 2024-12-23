import ShowLists from "./ShowLists";
import { Routes, Route, Switch } from 'react-router-dom'

const MainContent = ({ activeList , setActiveList }) => {
  return (
    <main>
        <ShowLists activeList={activeList} setActiveList={setActiveList}/>
    </main>
  )
}

export default MainContent;