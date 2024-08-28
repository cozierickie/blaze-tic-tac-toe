import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DecorativeElements from '../components/DecorativeElements';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1b1b32] relative overflow-hidden">
      <div className="bg-[#2a2a4a] p-8 rounded-lg shadow-lg w-full max-w-[400px]">
        <h1 className="text-[#0074fc] text-[36px] font-bold text-center mb-8">
          Register
        </h1>

        <p className="mb-6 text-center text-gray-300">
          Create your account to get started!
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="text-gray-300 font-semibold block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-gray-300 font-semibold block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Choose a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0074fc] hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Register
          </button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Already have an account?{' '}
            <Link to="/Login" className="text-[#0074fc] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <DecorativeElements />
    </div>
  );
}

export default Register;
