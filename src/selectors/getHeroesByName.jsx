import React from 'react'
import { heroes } from '../data/heroes';

const getHeroesByName = (name='') => {
    if(name===''){
        return [];
    }
    name=name.toLowerCase();
    return heroes.filter(heroe=>heroe.superhero.toLowerCase().includes(name));
}
 
export default getHeroesByName;