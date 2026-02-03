import { IconMenu2, IconX } from "@tabler/icons-react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

export const MobileToggleMenu = ({
  isOpen,
  onClick,
  trackHeaderOverlap,
}: {
  isOpen: boolean;
  onClick: () => void;
  trackHeaderOverlap: boolean;
}) => {
  const [isOverHeader, setIsOverHeader] = useState(
    trackHeaderOverlap ? true : false
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();

  // Only track scroll if trackHeaderOverlap is true
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (trackHeaderOverlap) {
      // Use a smaller threshold for mobile to switch color earlier
      const mobileThreshold = 80; // px, adjust as needed
      const desktopThreshold = window.innerHeight;
      const threshold = isMobile ? mobileThreshold : desktopThreshold;
      setIsOverHeader(latest < threshold);
    }
  });
  const iconColor = isMobile ? "text-black" : (trackHeaderOverlap && isOverHeader ? "text-white" : "text-black");
  return isOpen ? (
    <IconX className={`${iconColor} dark:text-white`} onClick={onClick} />
  ) : (
    <IconMenu2 className={`${iconColor} dark:text-white`} onClick={onClick} />
  );
};