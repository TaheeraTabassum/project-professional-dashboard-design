import React from 'react'

import { IoCallOutline, IoPlayCircleOutline } from "react-icons/io5";
import { callList, transcript } from "./Components/CallComponants/CallData";

export default function CallLogs() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#0B1120] min-h-screen text-white">
      {/* Left side: Call List */}
      <div className="flex-1 bg-[#0F172B] rounded-xl border border-white/5 p-4">
        <h3 className="text-lg font-medium mb-4">Call List</h3>
        <div className="space-y-3">
          {callList.map((call) => (
            <div key={call.id} className="p-4 rounded-lg bg-[#161F37] border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg"><IoCallOutline /></div>
                  <div>
                    <p className="font-semibold text-sm">{call.phone}</p>
                    <p className="text-xs text-gray-400">{call.date} • {call.time}</p>
                  </div>
                </div>
                <span className={`text-[10px] px-2 py-1 rounded-full ${call.statusColor}`}>
                  {call.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
                <span>🕒 {call.duration}</span>
                <span>✅ {call.outcome}</span>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">{call.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Details & Transcript */}
      <div className="w-full lg:w-[400px] flex flex-col gap-6">
        <div className="bg-[#0F172B] rounded-xl border border-white/5 p-5">
          <h3 className="text-lg font-medium mb-4">Call Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div><p className="text-gray-400 text-xs">Phone Number</p><p>+1 (555) 123-4567</p></div>
            <div><p className="text-gray-400 text-xs">Duration</p><p>4:32</p></div>
          </div>
          <button className="w-full py-3 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center gap-2 border border-purple-500/30 hover:bg-purple-600/30 transition">
            <IoPlayCircleOutline className="text-xl" /> Play Audio Recording
          </button>
        </div>

        <div className="bg-[#0F172B] rounded-xl border border-white/5 p-5 flex-1">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">📄 Conversation Transcript</h3>
          <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            {transcript.map((msg, i) => (
              <div key={i} className="text-sm">
                <p className={msg.role === "AI Assistant" ? "text-green-400 font-medium" : "text-blue-400 font-medium"}>
                  {msg.role}:
                </p>
                <p className="text-gray-300 mt-1 leading-relaxed">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}