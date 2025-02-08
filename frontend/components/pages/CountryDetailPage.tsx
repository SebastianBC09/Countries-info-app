'use client';

import { motion } from 'framer-motion';
import { useCountryDetail } from '@/lib/hooks/useCountries';
import { notFound } from 'next/navigation';
import { CountryHeader } from '../countries/CountryHeader';
import { BordersWidget } from '../countries/BordersWidget';
import { PopulationChart } from '../countries/PopulationChart';

interface CountryDetailPageProps {
  code: string;
}

export const CountryDetailPage = ({ code }: CountryDetailPageProps) => {
  const { country, loading, error } = useCountryDetail(code);

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

  if (error || !country) {
    return notFound();
  }

    return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8
                bg-gradient-to-br from-gray-50 to-gray-100
                dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <CountryHeader country={country} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {country.borders && country.borders.length > 0 && (
              <BordersWidget borders={country.borders} />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PopulationChart data={country.populationData} />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};
