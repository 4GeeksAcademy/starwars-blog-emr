const base_url = "https://www.swapi.tech/api";

const useSwapi = () => {
    const getPeople = async () => {
        const res = await fetch(`${base_url}/people`);
        const data = await res.json();
        return data.results; // Array de personajes con nombre y uid
    };

    const getPersonDetails = async (uid) => {
        const res = await fetch(`${base_url}/people/${uid}`);
        const data = await res.json();
        return data.results; // Recojo la info completa
    };

    const getVehicles = async () => {
        const res = await fetch(`${base_url}/vehicles`);
        const data = await res.json();
        return data.results;
    };

    const getPlanets = async () => {
        const res = await fetch(`${base_url}/planets`);
        const data = await res.json();
        return data.results;
    };

        return { getPeople, getPersonDetails, getVehicles, getPlanets };

};

export default useSwapi;