import { motion } from "framer-motion";

const text = "Welcome to My Portfolio!";

export default function TypingText() {
  return (
    <div className="text-3xl font-bold text-slate-400">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
