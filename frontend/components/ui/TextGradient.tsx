interface TextGradientProps {
  text: string;
  className?: string;
}

export const TextGradient = ({ text, className = '' }: TextGradientProps) => (
  <span className={`bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent ${className}`}>
    {text}
  </span>
);
