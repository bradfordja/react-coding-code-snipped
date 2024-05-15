import React from 'react';

interface ChildComponentProps {
  message: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

const ParentComponent: React.FC = () => {
  return <ChildComponent message="Hello from Parent!" />;
};

export default ParentComponent;
