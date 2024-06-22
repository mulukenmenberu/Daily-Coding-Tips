import React from 'react';

/*  
    Nullish Coalescing (??):
     - Provides a fallback value when encountering null or 
      undefined values ensuring a default response when data might be missing.
*/

const NullishCoalescing = ({ userData }) => {

  // Nullish Coalescing (??) usage
  // this Provide a default value
  const city = userData?.address?.city ?? 'City not specified'; 

  return (
    <div>
      {/* {........your ui components here..........} */}
      <p>User City: {city}</p>
    </div>
  );
};

export default NullishCoalescing;
