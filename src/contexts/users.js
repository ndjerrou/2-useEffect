// create a context for fetching users
import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const UsersContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users');

    console.log(response.data); // response.data

    setUsers(response.data);
  };

  const stableFetchUsers = useCallback(fetchUsers, []);

  return (
    <UsersContext.Provider value={{ stableFetchUsers, users }}>
      {children}
    </UsersContext.Provider>
  );
};
