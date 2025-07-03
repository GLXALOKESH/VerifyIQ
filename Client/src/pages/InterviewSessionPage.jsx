import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InterviewSessionPage = () => {
  const navigate = useNavigate();

  const [faceMatch, setFaceMatch] = useState(true);         // placeholder for real-time result
  const [voiceMatchScore, setVoiceMatchScore] = useState(92); // out of 100
  const [riskScore, setRiskScore] = useState(12);             // 0–100
  const [alerts, setAlerts] = useState([
    { time: '00:32', type: 'Face not detected for 3s' },
    { time: '01:15', type: 'Voice deviation > threshold' }
  ]);

  useEffect(() => {
    // TODO: Implement actual biometric validation logic
  }, []);

  const handleEndSession = () => {
    // Save logs or push to session report
    navigate('/report');
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Panel: Video + Audio Monitor */}
        <div className="flex-1 space-y-6">
          <div className="bg-[#1A1D23] p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium mb-2">🎥 Live Video</h3>
            <div className="w-full aspect-video bg-black rounded-lg border border-gray-600 flex items-center justify-center text-gray-500">
              Webcam Feed
            </div>
            <p className={`mt-3 text-sm ${faceMatch ? 'text-green-400' : 'text-red-400'}`}>
              {faceMatch ? '✅ Face Verified' : '❌ Face Mismatch Detected'}
            </p>
          </div>

          <div className="bg-[#1A1D23] p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium mb-2">🎙️ Voice Analysis</h3>
            <div className="w-full h-24 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
              Live Voice Waveform
            </div>
            <p className="mt-3 text-sm text-blue-400">
              Voice Match Score: <strong>{voiceMatchScore}%</strong>
            </p>
          </div>
        </div>

        {/* Right Panel: Risk Meter + Alerts */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-[#1A1D23] p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium mb-2">📊 Risk Score</h3>
            <div className="text-center mt-6">
              <div
                className={`text-5xl font-bold ${
                  riskScore < 30
                    ? 'text-green-400'
                    : riskScore < 70
                    ? 'text-yellow-400'
                    : 'text-red-500'
                }`}
              >
                {riskScore}/100
              </div>
              <p className="text-sm text-gray-400 mt-1">Session Integrity</p>
            </div>
          </div>

          <div className="bg-[#1A1D23] p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-medium mb-2">⚠️ Alerts</h3>
            <ul className="text-sm text-red-300 space-y-2 max-h-52 overflow-y-auto">
              {alerts.length > 0 ? (
                alerts.map((alert, idx) => (
                  <li key={idx}>
                    [{alert.time}] {alert.type}
                  </li>
                ))
              ) : (
                <li className="text-green-400">No anomalies detected.</li>
              )}
            </ul>
          </div>

          <button
            onClick={handleEndSession}
            className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl"
          >
            End Interview & View Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSessionPage;
