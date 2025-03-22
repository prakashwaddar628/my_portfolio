"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ No error here because it's a Client Component

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
