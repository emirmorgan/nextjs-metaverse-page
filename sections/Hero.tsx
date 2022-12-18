import { motion } from "framer-motion";
import Link from "next/link";
import { slideIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="py-12 xs:py-8 sm:py-16 pl-6 sm:pl-16">
      <motion.div
        variants={slideIn("right", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col w-full 2xl:max-w-[1280px] mx-auto"
      >
        <div className="z-10 relative flex flex-col justify-center items-center">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold text-xl lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="font-bold text-xl lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ma
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h1 className="font-bold text-xl lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ness
            </h1>
          </motion.div>
        </div>

        <div className="relative w-full md:-mt-[20px] -mt-[12px]">
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[20px]" />
          <img
            src="assets/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] relative z-10">
            <Link href="#explore" className="mr-10">
              <img
                src="assets/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain animate-[spin_3s_infinite] hover:animate-none hover:scale-90"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
