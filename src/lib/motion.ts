// Shared Framer Motion variants — GPU-friendly (transform + opacity only)

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const defaultTransition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1] as const, // easeOut
};

export const viewportOnce = { once: true, margin: "-60px" as const };
