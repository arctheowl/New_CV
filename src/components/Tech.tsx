import Tilt from "react-tilt";
import { motion } from "framer-motion";
import data from "./data/cvData.json";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon, link }: any) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-[10rem] rounded-2xl p-5 md:w-[20rem] "
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card' h-full w-full rounded-[20px] p-[1px] md:min-h-[280px]"
      >
        <div className="flex h-full flex-col items-center justify-evenly rounded-[20px] bg-[#030714] py-2 md:min-h-[280px] ">
          <div className="relative w-full md:h-[230px]">
            <img
              src={icon}
              alt="project_image"
              className="h-full w-full rounded-2xl px-2"
            />
          </div>

          <div className="mt-2 px-12">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText} text-center`}>What I Use</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          The Tech Stack
        </h2>
      </motion.div>

      <div className="flex w-full text-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mx-auto mt-3 text-center text-[17px] leading-[30px] md:w-1/2"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Check some of my projects out at the
          bottom of the page.
        </motion.p>
      </div>

      <div className=" grid grid-cols-2 md:mt-20 md:flex md:flex-wrap md:justify-around">
        {data.FrontendTech.map((project, index) => (
          <TechCard key={`project-${index}`} index={index} {...project} />
        ))}
        {data.BackendTech.map((project, index) => (
          <TechCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
