import React from 'react'
import { useParams } from "react-router";

export default function User({ users }) {
    let { id } = useParams();
    if (!users.length) {
        return (
            <div>
                No data
            </div>
        )
    }

    return (
        <div>
            {users[id].name}
        </div>
    );
}