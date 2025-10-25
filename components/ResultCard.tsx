import { motion } from 'framer-motion';
import ScoreChart from './ScoreChart';
import type { MetricCardProps } from '../types';

export default function ResultCard({ title, score, description, className = '' }: MetricCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return '#22c55e'; // green
    if (score >= 50) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg ${className}`}
    >
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <ScoreChart value={score} color={getScoreColor(score)} />
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-4">{description}</p>
      </div>
    </motion.div>
  );
}