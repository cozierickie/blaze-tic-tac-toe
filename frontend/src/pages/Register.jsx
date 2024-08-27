import React, { useState } from 'react';
import axios from 'axios';
import RegisterImage from '../assets/womanwithtab.webp';
import DecorativeElements from '../components/DecorativeElements';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        username,
        password,
      });
      setMessage(`User registered: ${response.data.username}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Registration failed');
      } else if (error.request) {
        setMessage('No response from server');
      } else {
        setMessage('Request error: ' + error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1b1b32] relative overflow-hidden px-4">
      <div className="flex flex-col md:flex-row max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex-1 p-8 md:p-10 mt-6 md:mt-10">
          <h2 className="mb-4 text-[#242424] text-2xl font-bold text-center">REGISTER</h2>
          <p className="mb-6 text-center text-gray-500">Create your account to get started!</p>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="block w-full p-2 mt-2 bg-[#6c63ff] text-white rounded-md hover:bg-[#5a54e2] transition-colors duration-300"
            >
              Register
            </button>
          </form>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          <p className="mt-4 text-center text-gray-500">Already have an account? <a href="/Login" className="text-blue-700">Login</a></p>
        </div>
        <div className="flex-1 bg-[#f0f2ff] flex justify-center items-center p-4 md:p-8">
          <img src={RegisterImage} alt="Register" className="max-w-full rounded-lg" />
        </div>
      </div>
      <DecorativeElements />
    </div>
  );
};

export default Register;
