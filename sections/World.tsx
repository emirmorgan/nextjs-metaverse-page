import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

const World = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={fadeIn("up", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8"
      >
        <span className="font-normal text-center text-[14px] text-secondary-white">
          | People on the World
        </span>
        <h2 className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]">
          Track friends around you and invite them to play together in the same
          world
        </h2>
        <motion.div
          variants={fadeIn("up", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/assets/map.png"
            alt="map"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <div
              data-cy="blink-1"
              className="absolute left-0 top-0 w-full h-full bg-[#65c4fa] bg-opacity-50 rounded-full animate-[ping_2s_infinite]"
            ></div>
            <Image
              src="/assets/people-01.png"
              alt="people"
              className="w-full h-full"
              fill
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <div
              data-cy="blink-2"
              className="absolute left-0 top-0 w-full h-full bg-[#8d39a3] bg-opacity-50 rounded-full animate-[ping_2s_infinite]"
            ></div>
            <Image
              src="/assets/people-02.png"
              alt="people"
              className="w-full h-full"
              fill
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <div
              data-cy="blink-3"
              className="absolute left-0 top-0 w-full h-full bg-[#65c4fa] bg-opacity-50 rounded-full animate-[ping_2s_infinite]"
            ></div>
            <Image
              src="/assets/people-03.png"
              alt="people"
              className="w-full h-full"
              fill
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
