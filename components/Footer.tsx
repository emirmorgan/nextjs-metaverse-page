import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  const socials = [
    {
      name: "twitter",
      url: "/assets/twitter.svg",
    },
    {
      name: "linkedin",
      url: "/assets/linkedin.svg",
    },
    {
      name: "instagram",
      url: "/assets/instagram.svg",
    },
    {
      name: "facebook",
      url: "/assets/facebook.svg",
    },
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-8 px-6 sm:px-16"
    >
      <div className="footer-gradient" />
      <div className="flex flex-col justify-between w-full 2xl:max-w-[1280px] mx-auto gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:scale-105 hover:shadow-[3px_3px_60px_rgba(35,98,225,0.3)] transition-all ease-linear"
          >
            <img
              src="/assets/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Enter Metaverse
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">METAVERSE</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2022 - 2023 Metaverse. All rights reserved.
            </p>

            <div className="flex gap-6">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
