import { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => response.json())
            .then((users) => setUsers(users))
    }, [])

    return (
        <div>
            <h2>Lista utenti GitHub</h2>
            <ul>
                {users.map((user) => (
                  <li key={user.id} onClick={() => setSelectedUser(user.login)}>{user.login}</li>
                ))}
            </ul>
            {selectedUser && (
        <div>
          <h3>Dettagli utente selezionato:</h3>
          <GithubUser username={selectedUser} />
        </div>
            )}
        </div>
    )

}

export default GithubUsers;