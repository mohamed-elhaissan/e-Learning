import { motion } from "framer-motion";

export const LoadingButton = () => {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
    transition={{
        staggerChildren : -0.2
    }}
      animate="pulse"
      className="flex items-center justify-center gap-2"
    >
      <motion.div
        className="w-3 h-3 my-2 rounded-full bg-white"
        variants={dotVariants}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-white"
        variants={dotVariants}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-white"
        variants={dotVariants}
      />
    </motion.div>
  );
};
