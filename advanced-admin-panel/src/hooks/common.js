import { useState, useEffect } from "react";
import { getUsers, postUser, changeUser, getAlbums } from "../api/api";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const getAndSetUsers = () => {
    getUsers()
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const postAndSetUser = () => {
    postUser()
      .then(() => getAndSetUsers())
      .catch((error) => {
        console.log(error.response);
      });
  };

  const changeAndSetUser = () => {
    changeUser()
      .then(() => getAndSetUsers())
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getAndSetUsers();
  }, []);

  return {
    users,
    postAndSetUser,
    changeAndSetUser,
  };
}

export function useAlbums() {
  const [albums, setAlbums] = useState([]);
  const getAndSetAlbums = () => {
    getAlbums()
      .then(({ data }) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getAndSetAlbums();
  }, []);
  return {
    albums,
  };
}
