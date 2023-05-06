import React, { useContext, useEffect, useState } from "react";
import profPic from "../../assets/images/pfp.jpg";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animcontext";

function Home() {
  const [showIntroPar, setShowIntroPar] = useState(false);
  const animCtx = useContext(AnimationContext);

  useEffect(() => {
    let timeoutDelay = animCtx.isNavbarPresent ? 0 : 2000;
    const showTimer = setTimeout(() => {
      setShowIntroPar(true);
    }, timeoutDelay);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-screen flex justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: animCtx.isNavbarPresent ? 0 : 1.5,
              duration: 1,
            },
          }}
          src={profPic}
          alt="Formal picture of the developer."
          className="h-[420px] rounded-full mt-16 mb-8"
        />
      </div>
      <section className="flex justify-center">
        {showIntroPar && (
          <p className="overflow-hidden whitespace-nowrap text-5xl border-r-4 border-white animate-typing">
            Hi! I'm Shand Ivan Sinohon.
          </p>
        )}
      </section>
    </div>
  );
}

export default Home;
