import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPlaneta = () => {
    const { uid } = useParams();
    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
            const data = await res.json();
            setPlanets(data.result);
        };
        fetchDetail();
    }, [uid]);

    // Para que no se rompa al cargar


    if (!planets) {
        return <div>Cargando...</div>;
    }

    const { name, diameter, rotation_period, orbital_period, climate, terrain } = planets.properties;

    return (
        <div className="container mt-4-">
            <h1>{name}</h1>
            <img
                src={"https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675"}
                alt={name}
                className="img-fluid mb-3"
            />
            <ul className="list-group">
                <li className="list-group-item"><strong>Diameter:</strong> {diameter}</li>
                <li className="list-group-item"><strong>Rotation Period:</strong> {rotation_period}</li>
                <li className="list-group-item"><strong>Orbital Period:</strong> {orbital_period}</li>
                <li className="list-group-item"><strong>Climate:</strong> {climate}</li>
                <li className="list-group-item"><strong>Terrain:</strong> {terrain}</li>
            </ul>
        </div>
    );
};

export default DetailPlaneta;