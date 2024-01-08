import { useEffect, useState } from "react"

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((json) => setUsers(json))
    }, [] );


    return (
        <div>
            {!users.length && <p>Loaing...</p>}
            <ul>
            {users.map(user =>
                <li key={user.id}>{user.name} {user.username}</li>
                )}

            </ul>

        </div>
    )
}

export default Users