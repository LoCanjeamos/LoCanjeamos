import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLikes, getAllPosts, likedPosts } from "../../redux/actions";
import style from './PostsLiked.module.css';

const PostsLiked = ({ userData }) => {
  const userId = userData.id;
  const dispatch = useDispatch();
  const likedPostss = useSelector((state) => state.likedPosts);

  // Agrega un estado local para controlar si los datos están cargados
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllLikes());
      await dispatch(getAllPosts());
      await dispatch(likedPosts(userId));
      // Marca que los datos están cargados una vez que las acciones se completen
      setDataLoaded(true);
    };

    fetchData();
  }, [dispatch, userId]);

  // Si los datos aún no están cargados, muestra un mensaje de carga
  if (!dataLoaded) {
    return <div>Cargando...</div>;
  }

  // Una vez que los datos están cargados, muestra la lista de likedPosts
  return (
    <div className={style.container}>
      <ul>
        {likedPostss.map((likedPost) => (
          <li key={likedPost.id}>
            {/* Renderiza la información de la publicación correspondiente */}
            
            <img src={likedPost.image} alt={likedPost.title} />
            <h4>{likedPost.title}</h4>
            {/* Puedes mostrar otros detalles de la publicación si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsLiked;
