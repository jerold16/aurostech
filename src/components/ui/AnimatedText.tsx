import React from 'react';
import { motion, type Variants } from 'motion/react';

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  text,
  className = '',
  delay = 0.2,
  wordDelay = 0.025
}) => {
  const words = text.split(/\s+/).filter(Boolean);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay
      }
    }
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: 'blur(3px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 24,
        stiffness: 260
      }
    }
  };

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.28em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

interface RevealFromBottomProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  amount?: number;
}

export const RevealFromBottom: React.FC<RevealFromBottomProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  className = '',
  amount = 0.15
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealFromLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  xOffset?: number;
  className?: string;
  amount?: number;
}

export const RevealFromLeft: React.FC<RevealFromLeftProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  xOffset = -40,
  className = '',
  amount = 0.15
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
