import { useEffect, useState } from "react";
import useSwapi from "../hooks/useSwapi";
import { CardPersonaje } from "../components/CardPersonaje.jsx";
import { CardVehiculo } from "../components/CardVehiculo.jsx";
import { CardPlaneta } from "../components/CardPlaneta.jsx";

export const Home = () => {

	const { getPeople, getPlanets, getVehicles } = useSwapi();
	const [people, setPeople] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			setPeople(await getPeople());
			setVehicles(await getVehicles());
			setPlanets(await getPlanets());
		};
		loadData();
	}, []);

	return (
		<div className="cointainer">
			<h2 className="my-3 text-center">Characters</h2>
			<div className="container d-flex flex-wrap justify-content-center">
				{people.map((person) => (
					<CardPersonaje key={person.uid} person={person} />
				))}
			</div>

			<h2 className="my-3 text-center">Vehicles</h2>
			<div className="container d-flex flex-wrap justify-content-center">
				{vehicles.map((vehicle) => (
					<CardVehiculo key={vehicle.uid} vehicle={vehicle} />
				))}
			</div>

			<h2 className="my-3 text-center">Planets</h2>
			<div className="container d-flex flex-wrap justify-content-center">
				{planets.map((planet) => (
					<CardPlaneta key={planet.uid} planet={planet} />
				))}
			</div>

		</div>
	);
};