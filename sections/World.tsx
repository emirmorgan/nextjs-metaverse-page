import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8"
      >
        <motion.span
          variants={staggerContainer(0.2, 1)}
          className="font-normal text-center text-[14px] text-secondary-white"
        >
          | People on the World
        </motion.span>
        <motion.h2
          variants={staggerContainer(0.2, 1)}
          className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]"
        >
          Track friends around you and invite them to play together in the same
          world
        </motion.h2>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/assets/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img
              src="/assets/people-01.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img
              src="/assets/people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img
              src="/assets/people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
