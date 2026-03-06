// StatisticsSection.jsx

import stats from "./statsData";

function StatisticsSection() {
 
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title with Full Width Line */}
        <div className="mb-12">
          <div className="flex items-center justify-center relative">
            <div className="h-0.5 bg-purple-700 absolute left-0 right-0"></div>
            <h2 className="relative bg-white px-8 text-5xl font-bold text-black z-10">
              Statistics
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl p-8 flex items-center gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <img 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-grow">
                <p className="text-purple-700 font-bold text-4xl mb-1">
                  {stat.number}
                </p>
                <p className="text-black text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  

export default StatisticsSection;