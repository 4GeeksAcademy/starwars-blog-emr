import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPersonaje = () => {
    const { uid } = useParams();
    const [people, setPeople] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            const data = await res.json();
            setPeople(data.result);
        };
        fetchDetail();
    }, [uid]);

    // Para que no se rompa al cargar
       if (!people) {
        return <div>Cargando...</div>;
    }

    const { name, height, mass, hair_color, birth_year, gender } = people.properties;

    return (
        <div className="container mt-4-">
            <h1>{name}</h1>
            <img
                src={"https://im.ziffdavisinternational.com/ign_es/screenshot/default/yoda_4bjb.jpg"}
                alt={name}
                className="img-fluid mb-3"
            />
            <ul className="list-group">
                <li className="list-group-item"><strong>Height:</strong> {height}</li>
                <li className="list-group-item"><strong>Mass:</strong> {mass}</li>
                <li className="list-group-item"><strong>Hair Color:</strong> {hair_color}</li>
                <li className="list-group-item"><strong>Birth Year:</strong> {birth_year}</li>
                <li className="list-group-item"><strong>Gender:</strong> {gender}</li>
            </ul>
        </div>
    );
};

export default DetailPersonaje;