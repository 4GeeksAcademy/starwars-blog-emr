import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailVehiculo = () => {
    const { uid } = useParams();
    const [vehicle, setVehicles] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
            const data = await res.json();
            setVehicles(data.result);
        };
        fetchDetail();
    }, [uid]);
    
    // Para que no se rompa al cargar

    if (!vehicle) {
        return <div>Cargando...</div>;
    }

    const { name, model, vehicle_class, manufacturer, crew, passengers } = vehicle.properties;

    return (
        <div className="container mt-4-">
            <h1>{name}</h1>
            <img
                src={"https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154"}
                alt={name}
                className="img-fluid mb-3"
            />
            <ul className="list-group">
                <li className="list-group-item"><strong>Model:</strong> {model}</li>
                <li className="list-group-item"><strong>Class:</strong> {vehicle_class}</li>
                <li className="list-group-item"><strong>Manufacturer:</strong> {manufacturer}</li>
                <li className="list-group-item"><strong>Crew:</strong> {crew}</li>
                <li className="list-group-item"><strong>Passengers:</strong> {passengers}</li>
            </ul>
        </div>
    );
};

export default DetailVehiculo;