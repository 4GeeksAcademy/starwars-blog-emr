import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CardVehiculo = ({ vehicle  }) => {
    const imageUrl = "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154";
    const { store, dispatch } = useGlobalReducer()

    const favKey = { uid: vehicle.uid, type: "vehicle" };
    const isFav = store.favorites.some(f => f.uid === favKey.uid && f.type === favKey.type);

    const toggleFavorite = () => {
        if (isFav) {
            dispatch({ type: "remove_favorite", payload: favKey });
        } else {
            dispatch({
                type: "add_favorites",
                payload: { item: { ...favKey, name: vehicle.name } }
            });
        }
    };

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={ imageUrl } className="card-img-top" alt={vehicle.name} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-outline-primary">
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