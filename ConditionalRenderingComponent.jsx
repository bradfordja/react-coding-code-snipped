import React, { useState } from 'react';

const ConditionalRenderingComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is a conditionally rendered paragraph.</p>}
    </div>
  );
};

export default ConditionalRenderingComponent;
