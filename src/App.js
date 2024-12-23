import { useEffect, useState } from 'react';
import Nav from './Nav';
import MainContent from './MainContent';
import { Routes, Route } from 'react-router-dom'
import CreateNewList from "./CreateNewList";
import apiRequest from './apiRequest';

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
        <Route exact path="/newList" element={<CreateNewList url={URL} fetchLists={fetchLists} setActiveList={setActiveList}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
