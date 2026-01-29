import React from 'react';

export default function BookingLink() {
  const link = "https://yourbookinglink.com/appointment";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  return (
    <div className="bg-[#111B3C] p-6 rounded-xl border border-[#162354] w-full max-w-4xl mx-auto mt-10">
    
      <label className="text-gray-300 text-sm mb-3 block">
        Booking Link
      </label>

      <div className="flex items-center gap-4 bg-[#0B1120] p-2 rounded-lg border border-[#162354]">
      
        <input
          type="text"
          readOnly
          value={link}
          className="bg-transparent text-gray-400 text-sm flex-grow outline-none px-2 py-1"
        />

       
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-[#111B3C] hover:bg-[#1c2a5a] text-white px-4 py-2 rounded-md border border-blue-500/30 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium">Copy Link</span>
        </button>
      </div>
    </div>
  );
}