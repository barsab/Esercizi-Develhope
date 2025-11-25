import { useState, useEffect } from "react";

function GithubUser({username}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!username) return;

        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((user) => setUser(user))
    }, [username])

    return (
        <div>
            <h3>{user?.name}</h3>
            <h1>{user?.login}</h1>
            <img src={user?.avatar_url} alt={user?.login} />
        </div>
    )
}

export default GithubUser;