import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import {jwtDecode} from '@/utils/jwtDecode'; // Corrected the import
import { API_BASE_URL, API_ENDPOINTS } from '@/utils/api';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false); // New state variable for redirection status
  const router = useRouter();

  useEffect(() => { // Use useEffect to handle redirection logic
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token); // Correctly use a different variable name
      setRedirecting(true);
      setTimeout(() => {
        if (decodedToken.role === 'user') {
          router.push('/');
        } else if (decodedToken.role === 'admin') {
          router.push('/admin');
        }
      }, 2000);
    }
  }, [router]); // Add router to the dependency array to ensure useEffect is correctly triggered



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setError('');
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TOKEN}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { access_token } = response.data;
      localStorage.setItem('token', access_token);

      const decodedToken = jwtDecode(access_token);
      setFormData({ email: '', password: '' });

      // Set redirecting state and redirect after a short delay
      setRedirecting(true);
      setTimeout(() => {
        if (decodedToken.role === 'user') {
          router.push('/profile');
        } else if (decodedToken.role === 'admin') {
          router.push('/admin');
        }
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.detail || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-[70vh]'>
      {redirecting ? (
        <div className="flex items-center justify-center">
          <div className="p-6 bg-white rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Redirecting...</h2>
            <p className="text-gray-600">Please wait a moment.</p>
          </div>
        </div>
      ) : (
        <form className="max-w-sm pt-10 mb-12" onSubmit={handleLogin}>
          <h4 className="mb-8 text-3xl text-center">Welcome Back</h4>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" className="text-dark bg-secondaryLight transform hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center shadow-lg" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      )}
      {!redirecting && (
        <div className="container mx-auto">
          <p className="text-gray-600 text-center w-full">
            <Link href="/signup" className="text-blue-400">Sign Up</Link> if you haven't already and access our platform's features and services.
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
