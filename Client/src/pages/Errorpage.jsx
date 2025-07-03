import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-300 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl font-medium mb-2">Oops! Page not found.</p>
        <p className="text-gray-400 mb-6 max-w-md">
          The page you are looking for doesn’t exist or may have been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md"
        >
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
