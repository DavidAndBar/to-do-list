import ShowLists from "./ShowLists";

const MainContent = ({ activeList , setActiveList }) => {
  return (
    <main>
        <ShowLists activeList={activeList} setActiveList={setActiveList}/>
    </main>
  )
}

export default MainContent;