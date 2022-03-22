import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {

  const [users,setUsers]=useState([])
  const [userEdit,setUserEdit]=useState(null)
  const [isShowing,setIsShowing]=useState(false) 

  useEffect(() => {
      getUsers()
  },[])

  const getUsers = () =>{
    axios
    .get("https://users-crud1.herokuapp.com/users/")
    .then((response) =>setUsers(response.data))
  }

  const addUser = (user) =>{
    axios
    .post("https://users-crud1.herokuapp.com/users/",user)
    .then(()=>getUsers(users))
  }

  const removeUser = (id) =>{
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUsers())
  }

  const selectUser=(user) =>setUserEdit(user)
  
  const updateUser = (userInfo) =>{
    axios.put(`https://users-crud1.herokuapp.com/users/${userInfo.id}/`,userInfo)
    .then(()=>{
      getUsers()
      setUserEdit(null)
    })
  }
  return (
    <div className="App">
    <div>
      <h1>Users </h1>
      <button onClick={() =>setIsShowing(!isShowing)}><i className="fa-solid fa-plus"></i>New user</button>
    </div>
    {isShowing ? (
      <UsersForm
        addUser={addUser}
        userEdit={userEdit}
        selectUser={selectUser}
        updateUser={updateUser}
        setIsShowing={setIsShowing}
        isShowing={isShowing}
      />
    ): <p></p>}
      
      <UsersList
        users={users}
        removeUser={removeUser}
        selectUser={selectUser}
        setIsShowing={setIsShowing}
        isShowing={isShowing}
      />
    </div>
  );
}

export default App;
