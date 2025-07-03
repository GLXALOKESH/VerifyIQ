import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">🔐 TrueSight</h1>
        <p className="text-lg text-gray-400 mb-10 max-w-md">
          AI-Powered Face & Voice Verification for Technical Interviews. Ensure integrity, prevent impersonation, and hire with trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/candidate/setup')}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl shadow-md"
          >
            Start Interview
          </button>

          <button
            onClick={() => navigate('/recruiter/dashboard')}
            className="bg-gray-800 hover:bg-gray-700 transition text-white px-6 py-3 rounded-2xl shadow-md border border-gray-600"
          >
            Recruiter Dashboard
          </button>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} TrueSight. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
