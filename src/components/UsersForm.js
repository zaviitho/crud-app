import React from 'react';
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({addUser, userEdit,selectUser,updateUser,setIsShowing,isShowing}) => {

    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[birthday,setBirthday]=useState('')
    

    useEffect(() => {

        if(userEdit){
            console.log(userEdit)
            setFirstName(userEdit.first_name)
            setLastName(userEdit.last_name)
            setEmail(userEdit.email)
            setPassword(userEdit.password)
            setBirthday(userEdit.birthday)
        }else{
            clear()
        }
    },[userEdit])
    const clear=() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setBirthday('')
    }
    
    const submit=(e) => {
        e.preventDefault()
        const userObj={
            firstName,
            lastName,
            email,
            password,
            birthday
        }
        if(userEdit){
            userObj.id=userEdit.id
            updateUser(userObj)
        }else{
            addUser()
        }
    }
    return (
        <div className="users-form">
            <form onSubmit={submit}>
                <div className="input-container">
                <label htmlFor="f-name">First Name</label><br />
                <input 
                type="text" 
                id='f-name'
                onChange={(e)=>setFirstName(e.target.value)}
                value={firstName}
                />
                </div>

                <div className="input-container">
                <label htmlFor="l-name">Last name</label><br />
                <input 
                type="text" 
                id='l-name'
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}    
                />
                </div>

                <div className="input-container">
                <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> Email</label><br />
                <input 
                type="email" 
                id='email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
                </div>

                <div className="input-container">
                <label htmlFor="password"> <i className="fa-solid fa-key"></i>Password</label><br />
                <input 
                type="password" 
                id='password'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
                </div>

                <div className="input-container">
                <label htmlFor="date"> <i className="fa-solid fa-cake-candles"></i>Birthday</label><br />
                <input 
                type="date" 
                id='date'
                onChange={(e)=>setBirthday(e.target.value)}
                value={birthday}                   
                />
                </div>
                <div>
                    <button >Submit</button>
                    {userEdit&&(
                        <button type='button' onClick={()=>{selectUser(null);setIsShowing(!isShowing)}}><i className="fa-solid fa-rectangle-xmark"></i></button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UsersForm;