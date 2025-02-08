import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export const Card = ({ children, className = '', animate = true }: CardProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
