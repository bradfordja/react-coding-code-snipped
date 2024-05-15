import React, { useState, useEffect } from 'react';

const DataFilterComponent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch data from URL and set it to state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Replace with your URL
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on input value
  const filteredData = data.filter(item => item.id.toString().includes(filter));

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by ID" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilterComponent;
