
import { useState } from 'react';

const Index = () => {
  const [selectedMode, setSelectedMode] = useState<'study' | 'self-paced' | null>(null);

  const progressData = [
    { month: '01', value: 30 },
    { month: '02', value: 45 },
    { month: '03', value: 35 },
    { month: '04', value: 20 },
    { month: '05', value: 30 },
    { month: '06', value: 40 },
    { month: '07', value: 25 },
    { month: '08', value: 35 },
    { month: '09', value: 38 },
    { month: '10', value: 32 },
    { month: '11', value: 42 },
    { month: '12', value: 28 },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        SELECT STUDY MODE
      </h1>

      {/* Study Mode Selection */}
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
        <button
          onClick={() => setSelectedMode('study')}
          className={`flex-1 py-4 text-lg font-bold rounded-lg border-2 transition-colors
            ${selectedMode === 'study' 
              ? 'bg-[#FFF3E0] border-[#FFB74D]' 
              : 'bg-[#FFF8E1] border-transparent hover:border-[#FFB74D]'
            }`}
        >
          STUDY PLAN
        </button>
        <button
          onClick={() => setSelectedMode('self-paced')}
          className={`flex-1 py-4 text-lg font-bold rounded-lg border-2 transition-colors
            ${selectedMode === 'self-paced' 
              ? 'bg-[#F3E5F5] border-[#CE93D8]' 
              : 'bg-[#FCE4EC] border-transparent hover:border-[#CE93D8]'
            }`}
        >
          SELF-PACED
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {/* Progress Chart */}
        <div className="bg-white rounded-lg p-4 border">
          <h3 className="font-semibold mb-4">Progress</h3>
          <div className="h-48 flex items-end gap-2">
            {progressData.map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full bg-pink-100 rounded-sm transition-all duration-300"
                  style={{ height: `${item.value}%` }}
                ></div>
                <span className="text-xs text-gray-600">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4">
          <div className="bg-[#F3E5F5] rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold">SOLVED QUESTIONS</span>
            <span className="font-bold">0</span>
          </div>
          <div className="bg-[#E0F2F1] rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold">SOLVED TYPES</span>
            <span className="font-bold">0</span>
          </div>
          <div className="bg-[#FFEBEE] rounded-lg p-4 flex justify-between items-center">
            <span className="font-semibold">TOTAL BACKLOG</span>
            <span className="font-bold">0</span>
          </div>
        </div>

        {/* Start Section */}
        <div className="bg-white rounded-lg p-4 border">
          <div className="space-y-2 mb-4">
            <p className="font-semibold">2024 :-</p>
            <p className="font-semibold">CHAPTER :-</p>
            <p className="font-semibold">PERCENTAGE</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#FFEBEE] text-black px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
              START
              <span className="text-xl">»</span>
            </button>
            <div className="flex-1 h-8 bg-green-200 rounded-lg">
              <div className="h-full w-1/2 bg-green-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
