import { useEffect, useState } from 'react';
import Nav from './Nav';
import MainContent from './MainContent';
import { Routes, Route } from 'react-router-dom'
import MainCreateNewList from "./MainCreateNewList";
import apiRequest from './functions/apiRequest';
import MainOptions from './MainOptions';
import MainCreateNewItem from './MainCreateNewItem';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
import loginUser from './functions/loginUser';

function App() {
  const COOKIE = document.cookie;
  const [lists, setLists] = useState('');
  const [activeList, setActiveList] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState(COOKIE.slice(COOKIE.indexOf("; ")+11))
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const URL = `http://localhost:8080/to-do-list`;
  const userURL = `${URL}/${username}`;

  const verifyToken = () => {
    const uri = `${URL}/check-token`;
    
    const tokenOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({token: COOKIE.slice(6, COOKIE.indexOf(";"))})
    }

    fetch(uri, tokenOptions).then(res => {
      res.json().then( result => {
        if (!!!result.validToken) {
          setIsAuth(false);
        } else {
          setIsAuth(true);
        }
      })
    })
  }

  const fetchLists = async () => {
    if (!!username) {
      const response = await fetch(userURL).then(res => {
        res.json().then(result => {
          setLists(result.lists);
          setActiveList(result.lists[0])
          return result.lists;
        })
      }).catch(error => console.log(error));
    }
    
  }

/* Fetch the initial data */
  useEffect(()=>{
    verifyToken();
    fetchLists();
  },[]) // empty array means it will run just once.

  useEffect( () => {
    const updateLists = () => {
            const updateOptions = {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(activeList)
            }
            const updateURL = `${userURL}/${activeList.id}`
            apiRequest(updateURL, updateOptions)
          }

    const retrieveLists = async () =>{
      const response = await fetch(userURL).then(res => {
        res.json().then(result => {
          setLists(result.lists);
        })
      }).catch(error => console.log(error));
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
      retrieveLists();
    }
  },[activeList] )


  return (
    <div className="App">
      <Nav isAuth={isAuth} activeList={activeList} setActiveList={setActiveList} lists={lists} username={username}/>
      <Routes>
        {
          !!isAuth ?  <>
                      <Route exact path="/" element={<MainContent activeList={activeList} setActiveList={setActiveList}/>}></Route>
                      <Route exact path="/newList" element={<MainCreateNewList url={userURL} lists={lists} setActiveList={setActiveList}/>}></Route>
                      <Route exact path="/options" element={<MainOptions activeList={activeList} setActiveList={setActiveList} lists={lists}/>}></Route>
                      <Route exact path="/createNewItem" element={<MainCreateNewItem activeList={activeList} setActiveList={setActiveList}/> }></Route>
                      <Route path="*" element={<NotFound />}></Route>
                    </> :
                    <>
                      <Route exact path="/" element={<Login URL={URL} email={email} setEmail={setEmail} password={password} setPassword={setPassword} loginUser={loginUser}/>}></Route>
                      <Route exact path="/register" element={<Register URL={URL} email={email} setEmail={setEmail} password={password} setPassword={setPassword} loginUser={loginUser}/>}></Route>
                      <Route path="*" element={<NotFound />}></Route>
                    </>
        }
        
      </Routes>
    </div>
  );
}

export default App;
