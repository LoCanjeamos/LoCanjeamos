/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import { useState, useEffect } from 'react';

import AddProduct from "./views/addProduct/AddProduct";
import Chats from "./views/chats/Chats";
import Exchanges from "./views/exchanges/Exchanges";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Navbar from "./components/navbar/Nabvar";
import MyProfile from "./views/myProfile/myProfile";

import Login from "./views/login/Login";
import Register from "./components/register/Register";
import Loading from "./views/loading/loading";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/resetPassword/ResetPassword";
import axios from "axios";
import "./App.css";
//Actions
import {getAllUsers,createGoogleUser} from '../src/redux/actions'
//Auht0
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {

  /* const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 21 || currentHour < 6) {
      setDarkMode(true);
      document.body.style.backgroundColor = "rgb(45, 45, 45)";
      document.body.style.color = "whitesmoke";
    }
  }, []); */

  axios.defaults.baseURL = "http://localhost:3001/";
  //axios.defaults.baseURL = "https://lo-canjeamos-production.up.railway.app/";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState(null);

  const setAuth = (status, user) => {
    setIsAuthenticated(status);
    setUserData(user);
  };

  if(filteredUsers){
    dispatch(createGoogleUser(userByGoogle))
  }//?despacha la funcion de crear un nuevo usuarios

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("/users/verify", {
          headers: {
            token: token,
          },
        })
        .then((response) => {
          if (response.data === true) {
            setIsAuthenticated(true);
            axios
              .get("/users/userId", {
                headers: {
                  token: token,
                },
              })
              .then((userDataResponse) => {
                setUserData({
                  email: userDataResponse.data.email,
                  id: userDataResponse.data.id,
                  username: userDataResponse.data.username,
                });
              })
              .catch((userDataError) => {
                console.error(
                  "Error al obtener los datos del usuario:",
                  userDataError
                );
              });
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error("Error al verificar el token:", error);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/login" element={isAuthenticated ? (userData && <MyProfile userData={userData} />) : (isAuthenticatedAuth0 ? (user && <MyProfile userData={user.name}/>) : (<Login setAuth={setAuth} />))}/>

        <Route path="/addProduct" element={userData ? (<AddProduct userData={userData} />)
         : user ? (<AddProduct userData={user} />)
         : (<Loading />)} />

        <Route path="/register" element={isAuthenticated ? (userData && <MyProfile userData={userData}/>) : (<Register setAuth={setAuth}/>)}/>

        <Route path="/detail/:id" element={userData ? <Detail userData={userData}/> : (user ? <Detail userData={user} /> : <Loading/>)} />

        <Route path="/exchanges" element={userData ? (<Exchanges userData={userData}/>)
        : user ? (<Exchanges userData={user}/>)
        : <Loading/>} />

        <Route path="/chats" element={<Chats/>} />

        <Route path="/login" element={<Login setAuth={setAuth}/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        <Route path="/resetpassword/:id" element={<ResetPassword/>} />

      </Routes>
    </>
  );
};

export default App;
