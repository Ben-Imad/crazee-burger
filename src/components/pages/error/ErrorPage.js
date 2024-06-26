import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
      <div>
          <button>
              <Link to={`/`}>Retournez vers la page d'accueil</Link>
          </button>
    </div>
  )
}
