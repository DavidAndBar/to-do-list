import CreateNewItem from "./CreateNewItem"

const MainCreateNewItem = ({ activeList, setActiveList }) => {
  return (
    <main>
        <div className="create-new-item-expanded">
            <CreateNewItem activeList={activeList} setActiveList={setActiveList}/>
        </div>
    </main>
  )
}

export default MainCreateNewItem