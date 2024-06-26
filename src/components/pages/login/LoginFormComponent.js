import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function LoginFormComponent() {
    // state
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    
    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername("");
        navigate(`/order/${username}`);
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    // affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={username} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
            <button>Accédez à votre espace</button>
        </form>
    )
}
