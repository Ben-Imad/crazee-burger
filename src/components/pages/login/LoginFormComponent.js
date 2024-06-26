import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginFormComponent() {
    // state
    const [inputValue, setInputValue] = useState("");

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    // affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
            <Link to={`/order/${inputValue}`}>
                <button>Accédez à votre espace</button>
            </Link>
        </form>
    )
}
