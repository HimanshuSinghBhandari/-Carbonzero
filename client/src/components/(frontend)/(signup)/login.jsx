import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both username and password are required');
      return;
    }
    
    // Check for admin credentials
    if (username === 'admin1' && password === '123456') {
      navigate('/admin/dashboard');
      return;
    }
    
    // Check user credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      navigate('/user/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-800 to-green-600 p-6 relative overflow-hidden">
      {/* Blur Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[800px] h-[800px] bg-white rounded-full filter blur-3xl"
        style={{
          top: '-20%',
          right: '-20%',
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-20 p-8 rounded-3xl shadow-xl backdrop-blur-lg w-full max-w-md relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="username" className="block text-sm font-medium text-white mb-1">Username</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm text-white placeholder-white placeholder-opacity-70"
              placeholder="Enter your username"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm text-white placeholder-white placeholder-opacity-70"
              placeholder="Enter your password"
            />
          </motion.div>
          {error && <p className="text-red-300 text-sm">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-800 bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Log In
          </motion.button>
        </form>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center text-sm text-white"
        >
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-white hover:text-green-200 underline">
            Sign up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginForm;