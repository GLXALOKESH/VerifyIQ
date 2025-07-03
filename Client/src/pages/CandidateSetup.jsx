import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateSetupPage = () => {
  const [faceCaptured, setFaceCaptured] = useState(false);
  const [voiceRecorded, setVoiceRecorded] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleCaptureFace = () => {
    // TODO: Add face-api.js descriptor logic
    setFaceCaptured(true);
  };

  const handleRecordVoice = () => {
    // TODO: Add voice recording logic
    setVoiceRecorded(true);
  };

  const isReady = faceCaptured && voiceRecorded;

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 px-6 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">🧑‍💼 Candidate Setup</h2>
      <p className="text-gray-400 text-center mb-10 max-w-xl">
        Please follow the steps below to enroll your facial and voice biometrics before starting the interview.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Face Capture */}
        <div className="bg-[#1A1D23] rounded-xl p-6 shadow-md flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">1️⃣ Capture Your Face</h3>
          <video
            ref={videoRef}
            className="w-full rounded-lg border border-gray-600 mb-4"
            autoPlay
            muted
          ></video>
          <button
            onClick={handleCaptureFace}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white disabled:opacity-50"
          >
            {faceCaptured ? '✅ Face Captured' : 'Capture Face'}
          </button>
        </div>

        {/* Voice Recording */}
        <div className="bg-[#1A1D23] rounded-xl p-6 shadow-md flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">2️⃣ Record Your Voice</h3>
          <div className="w-full h-32 border border-dashed border-gray-500 rounded-lg flex items-center justify-center text-gray-500 mb-4">
            🎙️ Voice Waveform Placeholder
          </div>
          <button
            onClick={handleRecordVoice}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white disabled:opacity-50"
          >
            {voiceRecorded ? '✅ Voice Recorded' : 'Record Voice'}
          </button>
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={() => navigate('/candidate/interview')}
        className={`mt-10 px-6 py-3 rounded-2xl text-white ${
          isReady
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-gray-700 cursor-not-allowed'
        }`}
        disabled={!isReady}
      >
        {isReady ? 'Proceed to Interview' : 'Complete Setup to Proceed'}
      </button>
    </div>
  );
};

export default CandidateSetupPage;
