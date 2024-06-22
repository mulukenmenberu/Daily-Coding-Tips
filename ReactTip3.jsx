import React from 'react';

/* 
    Destructuring with Default Values:
      - Simplifies props handling by providing defaults.
*/

const DestructuringWithDefaults = ({ userData: { name = 'Guest', age = 18 } = {} }) => {
  /*
    - Extracts name and age from userData.
    - Defaults: name='Guest', age=18 if undefined.
    - Fallback: userData={} if undefined (empty obj will assigned if undefined).
  */
  return (
    <div>
      {/* {........your ui components here..........} */}
      <p>User Name: {name}</p>
      <p>User Age: {age}</p>
    </div>
  );
};

export default DestructuringWithDefaults;
