import React, { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { useParams } from 'react-router-dom'
import Card from '../components/card/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export function Detail() {
  const { loading, state, setLoading } = useAppContext()
  const [dentist, setDentist] = useState([])
  const params = useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    getDentist(params.id)
  }, [])

  const getDentist = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await res.json()
      setDentist(data)
      setLoading(false)
    } catch (error) {
      throw new Error(`Hubo un error al realizar la consulta a la api: ${`https://jsonplaceholder.typicode.com/users/${id}`} \n${error}`)
    }
  }

  return (
    <main className={`${state.theme ? 'dark' : ''} main`}>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {!loading ?
        <section className='card-container'>
          {/* este componente debe consumir los destacados del localStorage */}
          <Card {...dentist} />
        </section>
        :
        <h2>Cargando dentistas...</h2>
      }
    </main>
  )
}