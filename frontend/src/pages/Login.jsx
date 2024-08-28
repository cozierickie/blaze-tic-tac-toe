import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DecorativeElements from '../components/DecorativeElements';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);

      setMessage(`Welcome, ${response.data.username}`);
      navigate('/Settings')
    } catch (error) {
      if (error.response) {
        setMessage(error.response?.data?.message || 'Login failed');
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
          Login
        </h1>

        <p className="mb-6 text-center text-gray-300">Let's have some fun!</p>

        <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="Enter your username"
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
              placeholder="Enter your password"
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
            Login
          </button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-[#0074fc] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <DecorativeElements />
    </div>
  );
};

export default Login;
