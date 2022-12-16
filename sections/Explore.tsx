import { motion } from "framer-motion";
import { useState } from "react";
import ExploreCard from "../components/ExploreCard";
import { staggerContainer } from "../utils/motion";

const cards = [
  {
    id: "world-1",
    imgUrl: "/assets/planet-01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/assets/planet-02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/assets/planet-03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/assets/planet-04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/assets/planet-05.png",
    title: "Hawkins Labs",
  },
];

const Explore = () => {
  const [active, setActive] = useState("world-1");

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
          | The World
        </motion.span>
        <motion.h2
          variants={staggerContainer(0.2, 1)}
          className="text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]"
        >
          Choose the world you want <br className="md:block hidden" /> to
          explore
        </motion.h2>

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {cards.map((item, index) => (
            <ExploreCard
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
