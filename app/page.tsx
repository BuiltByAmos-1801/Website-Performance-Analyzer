'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InputForm from '@/components/InputForm';
import ResultCard from '@/components/ResultCard';
import type { PageSpeedResult } from '@/types';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<PageSpeedResult | null>(null);
  const [error, setError] = useState('');

  const analyzeWebsite = async (url: string) => {
    setIsLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to analyze website');
      }

      setResults(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Website Performance Analyzer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Analyze your website's performance, accessibility, best practices, and SEO
          </p>
        </motion.div>

        <InputForm onAnalyze={analyzeWebsite} isLoading={isLoading} />

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto mt-6 p-4 bg-red-100 text-red-700 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ResultCard
              title="Performance"
              score={results.performance}
              description="Page load and interactivity metrics"
              className="border-t-4 border-blue-500"
            />
            <ResultCard
              title="Accessibility"
              score={results.accessibility}
              description="How accessible your site is to all users"
              className="border-t-4 border-green-500"
            />
            <ResultCard
              title="Best Practices"
              score={results.bestPractices}
              description="Following web development best practices"
              className="border-t-4 border-yellow-500"
            />
            <ResultCard
              title="SEO"
              score={results.seo}
              description="Search engine optimization score"
              className="border-t-4 border-purple-500"
            />
          </motion.div>
        )}
      </div>
    </main>
  );
}
