import { motion } from "framer-motion";
import Image from "next/image";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const scaleHover =
    "cursor-pointer hover:scale-105 transition-all ease-linear duration-150";

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-8 px-6 sm:px-16"
    >
      <div className="flex justify-between w-full 2xl:max-w-[1280px] mx-auto gap-8">
        <Image
          src="/assets/search.svg"
          alt="search"
          width={24}
          height={24}
          className={`object-contain ${scaleHover}`}
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSE
        </h2>
        <Image
          src="/assets/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className={`object-contain ${scaleHover}`}
        />
      </div>
      <div className="absolute z-[-1] w-[50%] inset-0 gradient-01"></div>
    </motion.nav>
  );
};

export default Navbar;
