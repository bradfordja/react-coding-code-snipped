import React, { useState, useEffect } from 'react';

interface Data {
  id: number;
  title: string;
}

const FetchDataComponent: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result: Data[] = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
