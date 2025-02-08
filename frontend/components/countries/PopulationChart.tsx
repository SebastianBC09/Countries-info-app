'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { PopulationData } from '@/lib/types/country';

interface PopulationChartProps {
  data: PopulationData;
}

export const PopulationChart = ({ data }: PopulationChartProps) => {
  const formatPopulation = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  const formatTooltipValue = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative p-6 bg-gradient-to-br from-white to-gray-50
                 dark:from-gray-800 dark:to-gray-900
                 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-blue-900/20
                 border border-gray-100 dark:border-gray-700
                 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20
                    dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900/20" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <span className="text-2xl">📊</span>
            Population Growth
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {`${data[0].year} - ${data[data.length - 1].year}`}
          </div>
        </motion.div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorPopulation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.01}/>
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-700"
              />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                tickMargin={10}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
                tickFormatter={(value) => value.toString()}
              />
              <YAxis
                tickFormatter={formatPopulation}
                tick={{ fontSize: 12 }}
                tickMargin={10}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg
                                    border border-gray-100 dark:border-gray-700
                                    backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {label}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                          {formatTooltipValue(payload[0].value as number)} people
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 8,
                  fill: "#3B82F6",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                fill="url(#colorPopulation)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};
