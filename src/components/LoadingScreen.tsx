import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-hero"
  >
    <div className="relative h-16 w-16">
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/20"
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
    </div>
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 font-serif text-xl text-foreground/80"
    >
      Crafting your journey…
    </motion.p>
  </motion.div>
);

export default LoadingScreen;
