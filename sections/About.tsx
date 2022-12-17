import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="gradient-02" />
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center w-full 2xl:max-w-[1280px] mx-auto mb-2"
      >
        <motion.span
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-normal text-center text-[14px] text-secondary-white"
        >
          | About Metaverse
        </motion.span>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center text-secondary-white text-[20px] sm:text-[32px] mt-4"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/assets/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] animate-bounce"
        />
      </motion.div>
    </section>
  );
};

export default About;
