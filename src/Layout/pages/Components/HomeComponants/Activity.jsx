export default function Activity() {
  const activities = [
    {
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      color: "bg-green-400",
    },
    {
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      color: "bg-orange-400",
    },
    {
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "bg-green-400",
    },
    {
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      color: "bg-red-400",
    },
  ];

  const repairs = [
    { title: "Screen Repair", value: 156 },
    { title: "Battery Replacement", value: 89 },
    { title: "Back Glass Repair", value: 67 },
    { title: "Software Issues", value: 45 },
  ];

  const maxValue = 156;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Recent Activity */}
      <div className="rounded-xl bg-[#0F172B] p-5 border border-white/5">
        <h3 className="text-white text-sm font-medium mb-4">
          Recent Activity
        </h3>

        <div className="space-y-3">
          {activities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
            >
              <span
                className={`w-2 h-2 rounded-full mt-2 ${item.color}`}
              ></span>

              <div>
                <p className="text-sm text-white">{item.text}</p>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="rounded-xl bg-[#0F172B] p-5 border border-white/5">
        <h3 className="text-white text-sm font-medium mb-4">
          Top Repair Requests
        </h3>

        <div className="space-y-4">
          {repairs.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{item.title}</span>
                <span className="text-gray-400">
                  {item.value} requests
                </span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-400 rounded-full"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
