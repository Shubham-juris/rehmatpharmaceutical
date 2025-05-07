import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 1, lab1: 0, lab2: 0, lab3: 0 },
  { name: 2, lab1: 10, lab2: 30, lab3: 0 },
  { name: 3, lab1: 30, lab2: 60, lab3: 10 },
  { name: 4, lab1: 50, lab2: 70, lab3: 30 },
  { name: 5, lab1: 70, lab2: 60, lab3: 50 },
  { name: 6, lab1: 80, lab2: 40, lab3: 70 },
  { name: 7, lab1: 70, lab2: 10, lab3: 60 },
  { name: 8, lab1: 60, lab2: 0, lab3: 40 },
  { name: 9, lab1: 40, lab2: 0, lab3: 10 },
  { name: 10, lab1: 10, lab2: 0, lab3: 0 },
];

const MarketingStatsSection = () => {
  return (
    <section className=" max-w-7xl mx-auto py-16 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Start Improve Your Marketing Today
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pellentesque mauris id lectus volutpat eleifend. Pellentesque
            tristique pharetra ex, et pharetra tellus ornare vel. In mollis
            sapien in metus mattis feugiat.
          </p>

          <h4 className="font-semibold text-lg text-gray-800 mb-4">
            Some of Our Results Chart
          </h4>

          <div className="flex gap-10 mt-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-gray-400">📈</div>
              <div>
                <p className="text-xl font-bold text-sky-700">400%</p>
                <p className="text-sm text-gray-500 font-medium uppercase">
                  Production Stats
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl text-gray-400">📊</div>
              <div>
                <p className="text-xl font-bold text-sky-700">160%</p>
                <p className="text-sm text-gray-500 font-medium uppercase">
                  Traffic Stats
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorLab1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLab2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLab3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="lab1"
                stroke="#14b8a6"
                fillOpacity={1}
                fill="url(#colorLab1)"
              />
              <Area
                type="monotone"
                dataKey="lab2"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#colorLab2)"
              />
              <Area
                type="monotone"
                dataKey="lab3"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorLab3)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default MarketingStatsSection;
