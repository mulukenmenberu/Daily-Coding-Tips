import React from 'react';

/* 
    Conditional Rendering with Short-circuit Evaluation:
      - Renders components or elements conditionally in a concise way using
        logical AND (&&) operator.
*/

const ConditionalRendering = ({ isLoggedIn, userName }) => {
  return (
    <div>

      {isLoggedIn && <p>Welcome back, {userName}!</p>}
      {/* 
          This means that  the message "Welcome back, {userName}!" 
          will only be rendered if isLoggedIn is true.
      */}

    </div>
  );
};

export default ConditionalRendering;
