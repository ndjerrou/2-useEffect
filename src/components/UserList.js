import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../contexts/users';

function UserList() {
  const { users, stableFetchUsers } = useContext(UsersContext);

  useEffect(() => {
    stableFetchUsers();
  }, [stableFetchUsers]);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default UserList;
