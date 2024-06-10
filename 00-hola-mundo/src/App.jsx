import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
//siempre hay que exportar el componente
export function App(){

    //se pueden pasar objetos como parametros: {...andres}
    const andres = {isFollowing: true, userName: 'DavidDev0103'};

 return (
    //llamar el archivo TwitterFollowCard.jsx y pasarle los parametros a la funcion
    //vacio el react.fragment
    <section className='App'>
        <TwitterFollowCard  userName="DavidDev0103"> 
            <strong>Andres Sanchez</strong>
        </TwitterFollowCard>

        <TwitterFollowCard  userName="_mafecita__">
            <strong>Maria Cooks</strong>    
        </TwitterFollowCard> 
    </section>
    
 )
}