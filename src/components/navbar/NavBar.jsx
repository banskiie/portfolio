import React, { useContext } from "react";
import devLogo from "../../assets/svg/dev.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navbarVariant, logoVariant, menuListVariant } from "./NavBarVariants";

function NavBar() {
  return (
    <motion.div
      variants={navbarVariant}
      initial="initial"
      animate="animate"
      className="h-20 w-full text-accent bg-secondary flex flex-row lg:px-48 sm:px-8 justify-between items-center"
    >
      <motion.div variants={logoVariant} initial="initial" animate="animate">
        <NavLink to="/" className="flex flex-row items-center">
          <img className="h-14" src={devLogo} alt="Main Logo" />
          <span className="font-bold text-4xl">
            shand
            <motion.span
              animate={{
                opacity: [0, 0.7, 0.5, 0.9, 0.6, 1],
                transition: {
                  delay: 2,
                  duration: 0.6,
                },
              }}
              className="text-primary"
            >
              .dev
            </motion.span>
          </span>
        </NavLink>
      </motion.div>
      <motion.div
        variants={menuListVariant}
        initial="initial"
        animate="animate"
        className="flex flex-row items-center justify-center gap-x-5 text-2xl font-semibold "
      >
        <motion.div variants={menuListVariant}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition ease-linear duration-150"
            }
          >
            home
          </NavLink>
        </motion.div>
        <motion.div variants={menuListVariant}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition ease-linear duration-150"
            }
          >
            about
          </NavLink>
        </motion.div>
        <motion.div variants={menuListVariant}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition ease-linear duration-150"
            }
          >
            projects
          </NavLink>
        </motion.div>
        <motion.div variants={menuListVariant}>
          {" "}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition ease-linear duration-150"
            }
          >
            contact
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default NavBar;
