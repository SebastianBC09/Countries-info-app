import { motion } from 'framer-motion';
import type { CountryDetail } from '@/lib/types/country';

interface CountryHeaderProps {
  country: CountryDetail;
}

export const CountryHeader = ({ country }: CountryHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-6 md:p-8 bg-gradient-to-br from-white to-gray-50
                 dark:from-gray-800 dark:to-gray-900
                 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-blue-900/20
                 border border-gray-100 dark:border-gray-700
                 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 group"
        >
        <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10
                         rounded-lg -rotate-6 scale-105 transition-transform
                         group-hover:rotate-0 group-hover:scale-110 duration-300"/>
        <motion.img
            src={country.flag}
            alt={`Flag of ${country.commonName}`}
            className="w-full h-full object-cover rounded-lg shadow-md relative
                     ring-1 ring-gray-200 dark:ring-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="space-y-4">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-gray-900 dark:text-white"
            >
              {country.commonName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {country.officialName}
            </motion.p>
          </div>
        </div>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full
                           bg-blue-100 dark:bg-blue-900/30
                           text-blue-700 dark:text-blue-300
                           text-sm font-medium
                           ring-1 ring-blue-100 dark:ring-blue-800">
            <span className="mr-2">🌎</span>
            {country.region}
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full
                           bg-purple-100 dark:bg-purple-900/30
                           text-purple-700 dark:text-purple-300
                           text-sm font-medium
                           ring-1 ring-purple-100 dark:ring-purple-800">
              <span className="mr-2">🏛️</span>
              {country.countryCode}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
