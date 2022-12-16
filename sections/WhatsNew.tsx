import { motion } from "framer-motion";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <motion.span
            variants={staggerContainer(0.2, 1)}
            className="font-normal text-center text-[14px] text-secondary-white"
          >
            | Whats new?
          </motion.span>
          <motion.h2
            variants={staggerContainer(0.2, 1)}
            className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]"
          >
            What&apos;s new about Metaversus?
          </motion.h2>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flex justify-center items-center flex-1"
        >
          <img
            src="assets/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          ></img>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
