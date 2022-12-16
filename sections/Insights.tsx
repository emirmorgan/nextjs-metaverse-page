import { motion } from "framer-motion";
import InsightCard from "../components/InsightCard";
import { staggerContainer } from "../utils/motion";

const Insights = () => {
  const insights = [
    {
      imgUrl: "/assets/planet-06.png",
      title: "The launch of the Metaverse makes Elon musk ketar-ketir",
      subtitle:
        "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    },
    {
      imgUrl: "/assets/planet-07.png",
      title: "7 tips to easily master the madness of the Metaverse",
      subtitle:
        "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    },
    {
      imgUrl: "/assets/planet-08.png",
      title: "With one platform you can explore the whole world virtually",
      subtitle:
        "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
    },
  ];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <motion.span
          variants={staggerContainer(0.2, 1)}
          className="font-normal text-center text-[14px] text-secondary-white"
        >
          | Insight
        </motion.span>
        <motion.h2
          variants={staggerContainer(0.2, 1)}
          className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]"
        >
          Insight about metaverse
        </motion.h2>
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
