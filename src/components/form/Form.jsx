import React, { useState } from "react";
import { useForm } from '../../hooks/useForm'
import { ValidateForm } from '../../helpers/ValidateForm'
import './Form.css'

const Form = () => {
  const { form, changed } = useForm()
  const [msgSended, setMsgSended] = useState('not-sended')
  const [sended, setSended] = useState(false)

  const formHandler = async (e) => {
    e.preventDefault()

    let msgToSend = form

    if (ValidateForm(msgToSend)) {
      setMsgSended(`Gracias ${msgToSend.name}, te contactaremos cuando antes vía mail!`)
      setSended(true)
      setTimeout(() => {
        setSended(false)
      }, 8000)
    } else {
      setMsgSended('Ha ocurrido un error! Los datos ingresados no son correctos!')
      setSended(true)
      setTimeout(() => {
        setSended(false)
      }, 8000)
    }

  }

  return (
    <>
      <form onSubmit={formHandler} className="form-contact">
        <div className="input-form-container">
          <label htmlFor="name"></label>
          <input type="text" name="name" onChange={changed} placeholder="Nombre Completo" />
        </div>
        <div className="input-form-container">
          <label htmlFor="email"></label>
          <input type="email" name="email" onChange={changed} placeholder="Correo Electronico" />
        </div>
        <input type="submit" value="Enviar" className="btn-send" />
      </form>
      {sended ?
        <h3>{msgSended}</h3>
        :
        null
      }
    </>
  );
};

export default Form;
