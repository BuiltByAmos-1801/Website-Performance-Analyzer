import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

interface ScoreChartProps {
  value: number;
  color: string;
  delay?: number;
}

export default function ScoreChart({ value, color, delay = 0 }: ScoreChartProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      className="w-24 h-24"
    >
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          trailColor: '#d6d6d6',
          pathTransition: 'stroke-dashoffset 1.5s ease-in-out',
        })}
      />
    </motion.div>
  );
}