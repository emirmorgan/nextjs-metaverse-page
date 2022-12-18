import { motion } from "framer-motion";
import { appear } from "../utils/motion";

import InsightCard from "../components/InsightCard";
import { insights } from "../constants/index";

const Insights = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={appear}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <span className="font-normal text-center text-[14px] text-secondary-white">
          | Insight
        </span>
        <h2 className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]">
          Insight about metaverse
        </h2>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
