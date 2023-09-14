import React from "react";
import { useAppContext } from '../hooks/useAppContext'
import Card from "../components/card/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export function Favs() {
  const { state, loading } = useAppContext()

  return (
    <main className={`${state.theme ? 'dark' : ''} main`}>
      <h1>Dentists Favs</h1>
      {!loading ?
        <section className='card-container'>
          {/* este componente debe consumir los destacados del localStorage */}
          {state.favs.length != 0 ?
            (state.favs.map(({ name, username, id }) => {
              return (
                <Card id={id} name={name} username={username} key={id} />
              )
            }))
            :
            <h2>No hay Favoritos</h2>}
        </section>
        :
        <h2>Cargando dentistas...</h2>
      }
    </main>
  );
};
