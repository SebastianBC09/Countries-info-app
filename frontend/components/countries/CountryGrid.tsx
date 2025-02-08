import Link from 'next/link';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import type { CountryListItem } from '@/lib/types/country';

interface CountryGridProps {
  countries: CountryListItem[];
}

export const CountryGrid = ({ countries }: CountryGridProps) => {
  if (!Array.isArray(countries)) {
    console.error('Expected countries to be an array, received:', countries);
    return null;
  }

return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {countries.map((country) => (
        <motion.div
          key={country.countryCode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <Link href={`/country/${country.countryCode}`}>
            <Card
              className="group cursor-pointer p-6 h-full bg-gradient-to-br from-white to-gray-50
                       dark:from-gray-800 dark:to-gray-900
                       hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-900/20
                       backdrop-blur-sm border border-gray-100 dark:border-gray-700
                       transition-all duration-300 ease-out
                       hover:-translate-y-1"
              animate={false}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30
                                 text-blue-600 dark:text-blue-300 text-sm font-medium
                                 ring-1 ring-blue-100 dark:ring-blue-800">
                    {country.countryCode}
                  </span>
                  <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-full
                             bg-gray-50 dark:bg-gray-700"
                    whileHover={{ rotate: 15 }}
                  >
                    <span className="text-xl">🌍</span>
                  </motion.div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white
                             group-hover:text-blue-600 dark:group-hover:text-blue-400
                             transition-colors duration-300">
                  {country.name}
                </h2>
                <div className="h-1 w-12 bg-blue-500/20 dark:bg-blue-400/20
                              group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
