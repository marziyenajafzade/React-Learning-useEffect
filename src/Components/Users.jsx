//sample: useEffect(()=>{function()}, [dependency])
import { useEffect, useState } from "react"
import Counter from "./Counter";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [user, setUser] = useState("");
    // set dependency
    const [id, setId] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setUsers(json))
            .catch(() => setError(true));
        console.log('useEffect runned!')
    }, [id]); //dependency
    // arrow function
    /*   useEffect(() => {
           const fetchUsersWithAsyncAndArrow = async () => {
               try {
                   const res = await fetch('https://jsonplaceholder.typicode.com/users');
                   const json = await res.json();
                   setUsers(json);
               } catch (error) {
                   console.log(error);
                   setError(true);
               }
           };
   
           fetchUsersWithAsyncAndArrow();
       }, []); 
       */
    //async / await
    /*    useEffect(() => {
            const fetchUsersWithAsync = async () => {
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/users');
                    const json = await res.json();
                    setUsers(json);
                } catch (error) {
                    console.log(error);
                }
            };
    
            fetchUsersWithAsync();
        }, []); */
    const searchHandler = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.json();
        setUser(user);
    }
    return (
        <div>
            {id > 10 && <Counter />}
            <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Enter id" />
            <button onClick={searchHandler}>Search</button>
            {!users.length && !error && <p>Loading...</p>}
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.name} {user.username}</li>
                )}
            </ul>
            <br />
            <h2>Name was searched</h2>
            <ul>
                <li key={user.id}>{user.name} {user.username}</li>
            </ul>
            {error && <p>Something went wrong!</p>}
        </div>
    )
}

export default Users