import React from 'react';


const UsersList = ({users,removeUser,selectUser,setIsShowing,isShowing}) => {
    return (
        <ul className="users-list">
            {users.map(user =>(
                <li key={user.id}>
                    
                    <ul>
                        <h2>{user.first_name}{user.last_name}</h2>
                        <li><i className="fa-solid fa-envelope"></i>{user.email}</li>
                        <li><i className="fa-solid fa-key"></i>{user.password}</li>
                        <li><i className="fa-solid fa-cake-candles"></i>{user.birthday}</li>
                    </ul>
                    <div >
                        <button className='btn-delete' onClick={()=>removeUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                        <button onClick={()=>{selectUser(user);setIsShowing(true)}}><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default UsersList;