import SelectActiveList from "./SelectActiveList"
import AddNewListBtn from "./AddNewListBtn"

const MainOptions = ({ activeList, setActiveList, lists }) => {
  return (
    <main>
        <div className="options-menu">
            <h2>Menu options</h2>
            <div>
                <SelectActiveList activeList={activeList} setActiveList={setActiveList} lists={lists} advancedOptions={true}/>
                <AddNewListBtn />
            </div>
        </div>
    </main>
  )
}

export default MainOptions