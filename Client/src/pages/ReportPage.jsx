import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportPage = () => {
  const sessionData = {
    candidateName: 'Alokesh Maitra',
    sessionTime: 'July 2, 2025 - 10:30 AM',
    integrityScore: 87,
    faceMatch: true,
    voiceScore: 92,
    alerts: [
      { time: '00:32', message: 'Face not detected for 3s' },
      { time: '01:15', message: 'Voice anomaly detected' },
    ],
    duration: '12 min 37 sec',
  };

  const exportPDF = () => {
    const reportElement = document.getElementById('report-content');
    html2canvas(reportElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('integrity_report.pdf');
    });
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">📄 Interview Integrity Report</h2>

        <div id="report-content" className="bg-[#1A1D23] p-6 rounded-xl shadow-md">
          {/* Header */}
          <div className="mb-4 border-b border-gray-600 pb-3">
            <p className="text-lg font-medium">{sessionData.candidateName}</p>
            <p className="text-sm text-gray-400">{sessionData.sessionTime}</p>
          </div>

          {/* Scores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-sm mb-1">Integrity Score</p>
              <p className="text-2xl font-bold text-green-400">{sessionData.integrityScore}/100</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-sm mb-1">Voice Match Score</p>
              <p className="text-2xl font-bold text-blue-400">{sessionData.voiceScore}%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-sm mb-1">Face Match</p>
              <p className={`text-xl font-bold ${sessionData.faceMatch ? 'text-green-400' : 'text-red-400'}`}>
                {sessionData.faceMatch ? '✅ Verified' : '❌ Mismatch'}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <p className="text-gray-400 text-sm mb-1">Interview Duration</p>
              <p className="text-xl font-bold text-gray-200">{sessionData.duration}</p>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h3 className="text-lg font-semibold text-red-300 mb-2">⚠️ Alerts</h3>
            <ul className="text-sm text-red-400 space-y-1">
              {sessionData.alerts.map((alert, idx) => (
                <li key={idx}>
                  [{alert.time}] {alert.message}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={exportPDF}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
          >
            ⬇️ Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
    