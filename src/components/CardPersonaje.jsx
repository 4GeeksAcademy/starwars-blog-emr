import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPersonaje = ({ person }) => {
    const imageUrl = "https://im.ziffdavisinternational.com/ign_es/screenshot/default/yoda_4bjb.jpg";
    const { store, dispatch } = useGlobalReducer();

    const favKey = { uid: person.uid, type: "character" };
    const isFav = store.favorites.some(f => f.uid === favKey.uid && f.type === favKey.type);

    const toggleFavorite = () => {
        if (isFav) {
            dispatch({ type: "remove_favorite", payload: favKey })
        } else {
            dispatch({
                type: "add_favorites",
                payload: { item: { ...favKey, name: person.name } }
            });
        }
    };

    return (
        <div className="card m-2">
            <img src={ imageUrl } className="card-img-top" alt={person.name} />
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/people/${person.uid}`} className="btn btn-outline-primary">
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