import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
    const {name} = useParams();
    return (
        <div>
            <h1>Bonjour {name}</h1>
            <br />
            <button>
                <Link to={"/"}>Déconnection</Link>
            </button>
        </div>
    )
}
