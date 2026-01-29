import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen  text-white font-sans">
      <div className="max-w-4xl mx-auto rounded-xl border border-[#162354] overflow-hidden shadow-2xl">
        
        {/* Header Section */}
    

        <div className="p-8 space-y-8">
          {/* Profile Image Section */}
          <div>
            <p className="text-sm text-gray-400 mb-4">Profile Image</p>
            <div className="flex items-end gap-4">
              <div className="relative">
                 <img
                  className="rounded-full w-24"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                <button className="absolute bottom-0 right-0 bg-[#1e2a5a] border border-blue-400/50 p-1.5 rounded-md shadow-lg hover:bg-[#253675] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Full Name</label>
              <input 
                type="text" 
                defaultValue="Jane D." 
                className="w-full bg-[#0B1120] border border-[#162354] rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input 
                type="email" 
                defaultValue="jane@gmail.com" 
                className="w-full bg-[#0B1120] border border-[#162354] rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Store Name</label>
              <input 
                type="text" 
                defaultValue="Ubreakfix Store" 
                className="w-full bg-[#0B1120] border border-[#162354] rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Store Address</label>
              <input 
                type="text" 
                defaultValue="123 Main Street, New York" 
                className="w-full bg-[#0B1120] border border-[#162354] rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

      
          <div className="pt-4 flex justify-center">
            <button className="bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 px-16 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 text-lg">
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;