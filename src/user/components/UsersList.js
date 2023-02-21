import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';
import './UsersList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>no users found!</h2>;
        </Card>
      </div>
    );
  }
  return (
    <div className='center'>
      <ul>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
