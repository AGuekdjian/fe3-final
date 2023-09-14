import React from "react";
import { useAppContext } from '../../hooks/useAppContext'
import { Global } from "../../helpers/Global";
import { Link } from 'react-router-dom'
import dentista from '../../assets/img/doctor.jpg'
import { BiHeart, BiSolidHeart } from 'react-icons/bi'
import './Card.css'


const Card = ({ name, username, id, email }) => {

  const { users, state, dispatch, getDentist } = useAppContext()

  const isFav = (id) => state.favs.some(favDentist => favDentist.id === id)

  const addFav = (id) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentist = users.find(dentist => dentist.id === id)
    dispatch({ type: Global.actionType[1].ADD_TO_FAV, payload: dentist })
    const favs = [...state.favs, dentist]
    localStorage.favs = JSON.stringify(favs)
  }

  const removeFav = (id) => {
    const dentist = users.find(dentist => dentist.id === id)
    dispatch({ type: Global.actionType[1].REMOVE_FAV, payload: dentist });
    const favs = state.favs.filter(({ id }) => id !== dentist.id)
    localStorage.favs = JSON.stringify(favs)
  }

  return (
    <article className={`${state.theme ? 'dark-card' : ''} card`} key={id}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="title-btnFav">
        <img src={dentista} alt="Dentista" className="img-dentista" />
        {
          isFav(id) ?
            <BiSolidHeart onClick={() => removeFav(id)} className="btn-fav" /> :
            <BiHeart onClick={() => addFav(id)} className="btn-fav" />
        }
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <div className="content-card">
        <Link to={`/dentist/${id}`} className='card_link'>
          <h3 className=''>{name}</h3>
        </Link>
        <p>{username}</p>
        <p>{email}</p>
        <Link to={`/dentist/${id}`} >
          <p className='more-info'>Ver Perfil</p>
        </Link>
      </div>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    </article>
  );
};

export default Card;
