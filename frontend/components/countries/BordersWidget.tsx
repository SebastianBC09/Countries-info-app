import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CountryDetail } from '@/lib/types/country';

interface BordersWidgetProps {
  borders: CountryDetail['borders'];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const BordersWidget = ({ borders }: BordersWidgetProps) => {
  if (!borders?.length) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
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
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            Bordering Countries
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {borders.length} {borders.length === 1 ? 'country' : 'countries'}
          </span>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {borders.map((border) => border && (
            <motion.div
              key={border.countryCode}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/country/${border.countryCode}`}>
                <div className="group p-4 rounded-xl
                              bg-white dark:bg-gray-800
                              hover:bg-blue-50 dark:hover:bg-blue-900/30
                              shadow-sm hover:shadow-md
                              border border-gray-100 dark:border-gray-700
                              transition-all duration-300 ease-out
                              relative overflow-hidden">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-100/30 to-blue-100/0 dark:from-blue-900/0 dark:via-blue-900/30 dark:to-blue-900/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                -translate-x-full group-hover:translate-x-full transform
                                pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {border.commonName}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {border.region}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium rounded-md
                                    bg-gray-100 dark:bg-gray-700
                                    text-gray-600 dark:text-gray-300">
                        {border.countryCode}
                      </span>
                    </div>

                    {/* Animated underline */}
                    <div className="h-0.5 w-12 bg-blue-500/20 dark:bg-blue-400/20
                                mt-3 rounded-full
                                group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
