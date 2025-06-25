import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CardPlaneta = ({ planet }) => {
    const imageUrl = "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675";
    const { store, dispatch } = useGlobalReducer()

    const favKey = { uid: planet.uid, type: "planet" };
    const isFav = store.favorites.some(f => f.uid === favKey.uid && f.type === favKey.type);

    const toggleFavorite = () => {
        if (isFav) {
            dispatch({ type: "remove_favorite", payload: favKey });
        } else {
            dispatch({
                type: "add_favorites",
                payload: { item: { ...favKey, name: planet.name } }
            });
        }
    };

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={ imageUrl } className="card-img-top" alt={planet.name} />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/planets/${planet.uid}`} className="btn btn-outline-primary">
                        Learn more
                    </Link>
                    <button className={`btn ${isFav ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={toggleFavorite}
                    >
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};