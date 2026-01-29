export default function Home() {
  return (
    <div className="min-h-screen flex  p-4">
      
     
      <div className="w-full max-w-md rounded-2xl p-6 text-white shadow-xl">

        <div className="flex items-center gap-4 mb-6">
          <img
                  className="rounded-full w-24"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
          <button className="px-4 py-1.5 text-sm rounded-full border  shadow-md shadow-gray-300  border-white/30 hover:bg-white/10 transition">
            Edit Profile
          </button>
        </div>

        {/* Info Rows */}
        <div className="space-y-4 text-sm">
          
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400">Full Name:</span>
            <span>Jane D.</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400">Email:</span>
            <span>jane@gmail.com</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400">Store Name:</span>
            <span>Ubreakfix Store</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Store Address:</span>
            <span className="text-right">
              123 Main Street, New York, NY 10001
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
