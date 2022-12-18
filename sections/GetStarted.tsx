import { motion } from "framer-motion";
import { appear, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => {
  const features = [
    "Find a world that suits you and you want to enter",
    "Enter the world by reading basmalah to be safe",
    "No need to beat around the bush, just stay on the gas and have fun",
  ];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={appear}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex justify-center items-center flex-1"
        >
          <img
            src="/assets/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain animate-[pulse_5s_infinite]"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <span className="font-normal text-center text-[14px] text-secondary-white">
            | How Metaversus Works
          </span>
          <h2 className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]">
            Get started with just a few clicks
          </h2>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <p className="font-bold text-[20px] text-white">
                    {index + 1}
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
