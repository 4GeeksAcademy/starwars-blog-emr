import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const removeFavorite = (uid, type) => {
		dispatch({
			type: "remove_favorite",
			payload: { uid, type }
		});
	};

	return (
		<nav className="navbar navbar-dark bg-dark border-bottom border-warning">
			<div className="container">
				<Link to="/">
					<img
						src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG33.png"
						alt="Logo Star Wars"
						className="logo"
						style={{ height: "50px" }}
					/>
				</Link>

				<div className="ml-auto dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="favoritesDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites <span className="badge bg-dark">{store.favorites.length}</span>
					</button>

					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No favorites yet</li>
						) : (
							store.favorites.map((item, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									<Link
										to={`/single/${item.type}/${item.uid}`}
										className="text-decoration-none text-dark flex-grow-1 me-2"
									>
										{item.name}
									</Link>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={() => removeFavorite(item.uid, item.type)}
									>
										<i className="fas fa-trash-alt"></i>
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};