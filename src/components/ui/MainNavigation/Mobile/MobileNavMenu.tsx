import { cn } from "@/lib/utils/utils";
import { AnimatePresence, motion } from "motion/react";

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute inset-x-0 bottom-full mb-2 z-50 flex w-full flex-col items-start justify-start gap-3 rounded-2xl bg-white px-6 py-6 shadow-[0_-4px_24px_rgba(34,_42,_53,_0.12),_0_-2px_8px_rgba(0,_0,_0,_0.08)] border border-gray-200 dark:bg-neutral-950 dark:border-neutral-800",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};