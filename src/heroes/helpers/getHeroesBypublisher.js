
import { heroes } from "../data/heroes";

export const getHeroesBypublisher= (publisher) => {

    const validPublisher = ['DC Comics','Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher}, no es un publisher valido (jhon) `);
    }

    return heroes.filter( heroe => heroe.publisher === publisher);

};