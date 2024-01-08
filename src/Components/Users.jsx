import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setUsers(json))
            .catch(() => setError(true));
    }, []); 
    // arrow function
 /*     const fetchUsersWithAsyncAndArrow = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }  
    useEffect(()=>{
       fetchUsersWithAsyncAndArrow();
    })
    */
    //async / await
/*     useEffect(() => {
        async function fetchUsersWithAsync() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json;
            setUsers(json);
        }; 
        fetchUsersWithAsync();
    }, []); */
    return (
        <div>
        {!users.length && !error && <p>Loading...</p>}
        <ul>
            {users.map(user =>
                <li key={user.id}>{user.name} {user.username}</li>
            )}
        </ul>
        {error && <p>Something went wrong!</p>}
    </div>
    )
}

export default Users