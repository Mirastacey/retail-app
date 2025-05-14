import React, { useState } from 'react';
import axios from 'axios';

function CustomerForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/customers', { name, phone });
    alert('Customer added!');
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Add Customer</button>
    </form>
  );
}

export default CustomerForm;
