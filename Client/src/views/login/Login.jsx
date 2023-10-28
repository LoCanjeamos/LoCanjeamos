import Logo from '../../assets/locan.png'
import { useState } from 'react'
import React from 'react'
import style from './Login.module.css'
import { Link } from "react-router-dom";


const Login = ({setAuth}) => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

console.log(input)

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    
    //  setErrors(validate({
    //    ...form, 
    //    [e.target.name]: e.target.value,
    //  }))
  }


  return (
    <div className={style.container}>
      <img src={Logo}/>
        <div>
          <h2>Iniciar sesión</h2>
        </div>
        <div className={style.form}>
          <form>
              <div>
                <input type="text" name="username" placeholder='usuario' onChange={handleInputChange}
                  value={input.username}/>
              </div>
              <div>
                <input type="password"name="password" placeholder='contraseña'onChange={handleInputChange}
                  value={input.password}/>
              </div>

              <button onClick={()=>{setAuth(true)}}>Iniciar sesión</button>
          </form>
        </div>

        <div className={style.buttons}>
          <span>
          No tienes una cuenta? 
          <Link to='/register' className={style.register}>Registrate</Link>
          </span>
        </div>

    </div>
    
  )
}

export default Login