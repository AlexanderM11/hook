import React from 'react';
import { useState, useEffect } from 'react';
import randomName from 'random-name';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import User from './User';

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        let userArray=[];
        for(let i=0;i<40;i++){
            userArray.push(
                {
                    id:i,
                    name: randomName.first()
                }
            )
        }
        setUsers(userArray);
    },[])
    function handleUserClick(user){
        console.log(user)
    }
    return (
        <div>
            <button onClick={console.log(users)}>ghh</button>
            <ul>
                {users.map(user=>(
                    <li key={user.id} onClick={()=>handleUserClick(user)}>{user.name}</li>
                ))

                }
            </ul>
            <Switch>
                <Route path="/users/:id">
                    <User />
                </Route>
            </Switch>
        </div>
    )
}