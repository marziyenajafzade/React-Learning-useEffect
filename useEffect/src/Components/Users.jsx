import { useEffect } from "react"

const Users = () => {
    useEffect(() => {
        setTimeout(() => {
            console.log('mounted')
        }, 3000);
    }, []
    );
    return (
        <div>Users</div>
    )
}

export default Users