import { useEffect, useState } from 'react';
import Nav from './Nav';
import MainContent from './MainContent';
import { Routes, Route } from 'react-router-dom'
import MainCreateNewList from "./MainCreateNewList";
import apiRequest from './apiRequest';
import MainOptions from './MainOptions';
import MainCreateNewItem from './MainCreateNewItem';

function App() {
  const URL = "http://localhost:3500/davidLists";
  const [lists, setLists] = useState('');
  const [activeList, setActiveList] = useState('')

  const fetchLists = async () => {
    const response = await fetch(URL);
    const listsRetrieved = await response.json();
    setLists(listsRetrieved);
    setActiveList(listsRetrieved[0])
    return listsRetrieved;
  }

/* Fetch the initial data */
  useEffect(()=>{
    fetchLists()
  },[])

  useEffect( () => {
    const updateLists = () => {
            const updateOptions = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(activeList)
            }
            const updateURL = `${URL}/${activeList.id}`
            apiRequest(updateURL, updateOptions)
          }

    if (!!lists) {
      const newList = lists.map( (list) => {
        if (list.id === activeList.id) {
          return activeList;
        } else {
          return list;
        }
      })
      setLists(newList);
      updateLists();
    }
  },[activeList] )

  return (
    <div className="App">
      <Nav activeList={activeList} setActiveList={setActiveList} lists={lists}/>
      <Routes>
        <Route exact path="/" element={<MainContent activeList={activeList} setActiveList={setActiveList}/>}></Route>
        <Route exact path="/newList" element={<MainCreateNewList url={URL} fetchLists={fetchLists} setActiveList={setActiveList}/>}></Route>
        <Route exact path="/options" element={<MainOptions activeList={activeList} setActiveList={setActiveList} lists={lists}/>}></Route>
        <Route exact path="/createNewItem" element={<MainCreateNewItem activeList={activeList} setActiveList={setActiveList}/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
