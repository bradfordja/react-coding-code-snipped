import React, { useState, useEffect } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data));
  }, []);

  return (
    <ul>
      {customers.map(customer => (
        <li key={customer.id}>
          {customer.name}
        </li>
      ))}
    </ul>
  );
}

export default CustomerList;