import React from 'react';
import { useState, useEffect } from 'react';
import randomName from 'random-name';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import User from './User';


function Users({ history }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let userArray = [];
        for (let i = 0; i < 40; i++) {
            userArray.push(
                {
                    id: i,
                    name: randomName.first()
                }
            )
        }
        setUsers(userArray);
    }, [])
    function handleUserClick(user) {
        history.push(`/users/${user.id}`)
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{ flex: 1 }}>
                <ul>
                    {users.map(user => (
                        <div>
                            <li key={user.id} onClick={() => handleUserClick(user)}>{user.name}</li>
                        </div>
                    ))

                    }
                </ul>
            </div>
            <div style={{ flex: 1 }}>
                <Switch>
                    <Route path="/users/:id">
                        <User users={users} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default withRouter(Users);


