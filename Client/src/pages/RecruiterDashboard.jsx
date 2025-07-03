import React, { useState } from 'react';

const RecruiterDashboardPage = () => {
  const [candidates] = useState([
    {
      id: 'cand001',
      name: 'Alokesh Maitra',
      integrityScore: 87,
      faceMatch: true,
      voiceScore: 92,
      alerts: ['Face not visible for 4s', 'Voice anomaly detected'],
      timestamp: '10:32 AM',
    },
    {
      id: 'cand002',
      name: 'Riya Sen',
      integrityScore: 71,
      faceMatch: false,
      voiceScore: 78,
      alerts: ['Multiple faces detected'],
      timestamp: '10:10 AM',
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 px-6 py-10">
      <h2 className="text-3xl font-semibold mb-6">🧑‍💼 Recruiter Dashboard</h2>
      <p className="text-gray-400 mb-8">
        Monitor ongoing interviews and review candidate verification data in real-time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-[#1A1D23] rounded-xl p-5 shadow-md border border-gray-800"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{candidate.name}</h3>
              <span className="text-sm text-gray-500">{candidate.timestamp}</span>
            </div>

            <div className="flex flex-col gap-2 mb-3">
              <p>
                🎯 <span className="text-gray-400">Integrity Score:</span>{' '}
                <span
                  className={`font-semibold ${
                    candidate.integrityScore >= 80
                      ? 'text-green-400'
                      : candidate.integrityScore >= 60
                      ? 'text-yellow-400'
                      : 'text-red-500'
                  }`}
                >
                  {candidate.integrityScore}/100
                </span>
              </p>
              <p>
                🧍‍♂️ <span className="text-gray-400">Face Match:</span>{' '}
                {candidate.faceMatch ? (
                  <span className="text-green-400">✅ Verified</span>
                ) : (
                  <span className="text-red-400">❌ Mismatch</span>
                )}
              </p>
              <p>
                🔊 <span className="text-gray-400">Voice Match Score:</span>{' '}
                <span className="text-blue-400">{candidate.voiceScore}%</span>
              </p>
            </div>

            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-400 mb-1">⚠️ Alerts:</h4>
              <ul className="list-disc list-inside text-red-300 text-sm space-y-1">
                {candidate.alerts.length > 0 ? (
                  candidate.alerts.map((alert, idx) => <li key={idx}>{alert}</li>)
                ) : (
                  <li className="text-green-400">No anomalies.</li>
                )}
              </ul>
            </div>

            <button
              onClick={() => alert('Feature: View full session report coming soon')}
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl text-sm"
            >
              View Full Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterDashboardPage;
