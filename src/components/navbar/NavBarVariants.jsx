export const navbarVariant = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    staggerChildren: 0.2,
    transition: {
      duration: 1,
      ease: [0, 0.5, 0.2, 1],
    },
  },
};

export const logoVariant = {
  initial: { x: "-100vw" },
  animate: {
    x: 0,
    transition: {
      delay: 0.6,
      ease: [0, 0.5, 0.2, 1],
      duration: 0.8,
    },
  },
};

export const menuListVariant = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0, 0.5, 0.2, 1],
      staggerChildren: 0.15,
    },
  },
};