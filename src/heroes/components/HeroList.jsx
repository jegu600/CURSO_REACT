
import React from 'react';

import { HeroCard } from './';
import { getHeroesBypublisher } from '../helpers';

export const HeroList = ({publisher}) => {
   const heroes = getHeroesBypublisher(publisher);
   return (
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
      
            {
               heroes.map( hero => (
                  <HeroCard 
                     key={hero.id}
                     {...hero}
                  />
               ))
            }
        
      </div>
   )
}
