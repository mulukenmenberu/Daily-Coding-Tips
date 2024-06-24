import React, { Suspense, lazy } from 'react';

/*
    Lazy Loading Components:
      - Improves the performance of your app by loading components only when
        they are needed, using React.lazy and Suspense.
*/

const YourSecondComponent = lazy(() => import('./YourSecondComponent'));

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <YourSecondComponent />
      </Suspense>
      {/* 
          The 'YourSecondComponent' will only be loaded when it is needed.
          The Suspense component shows a fallback (e.g., a loading spinner) 
          while the lazy-loaded component is being fetched.
      */}
    </div>
  );
};

export default LazyLoading;
