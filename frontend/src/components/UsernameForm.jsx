import React, { useState } from 'react';
import axios from 'axios';

function UsernameForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { username });
      alert('Username submitted successfully');
      setUsername('');
    } catch (error) {
      alert('Error submitting username');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <label className="block mb-2 text-lg font-medium text-gray-700">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4"
        placeholder="Enter your username"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default UsernameForm;
