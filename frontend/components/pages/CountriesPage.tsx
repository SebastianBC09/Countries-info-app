'use client';

import { motion } from 'framer-motion';
import { CountryGrid } from '../countries/CountryGrid';
import { useCountries } from '@/lib/hooks/useCountries';

export const CountriesPage = () => {
  const { countries, loading, error } = useCountries();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-gray-50 to-gray-100
                    dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative"
        >
          <div className="w-16 h-16 border-4 border-blue-500 rounded-full
                       border-t-transparent animate-spin" />
          <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900
                       rounded-full opacity-20" />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-gray-50 to-gray-100
                    dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl text-center"
        >
          <span className="text-2xl mb-4 block">⚠️</span>
          <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100
                 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/0
                     dark:from-gray-900/50 dark:to-gray-900/0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <span className="text-6xl">🌎</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white
                       sm:text-5xl md:text-6xl"
            >
              Explore the World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400
                       sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Discover information about {countries.length} countries around the globe
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <CountryGrid countries={countries} />
        </motion.div>
      </div>
    </motion.main>
  );
};
