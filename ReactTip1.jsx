import React from 'react';

/* 
    Optional Chaining (?.): 
      - Safely accesses nested properties without causing errors if
          intermediate properties are null or undefined, simplifying
          handling of potentially absent data.
*/

const OptionalChaining = ({ userData }) => {
  //  Safely access nested property using Optional Chaining (?.)
  //  This doesn't cause error if 'basicDetails' or 'name' are null/undefined
  const name = userData?.basicDetails?.name; 

  return (
    <div>
      {/* {........your ui components here..........} */}
    </div>
  );
};

export default OptionalChaining;
