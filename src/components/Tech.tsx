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
      className="w-[20rem] rounded-2xl p-5 "
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card' h-full min-h-[280px] w-full rounded-[20px] p-[1px]"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="flex h-full min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#030714] py-2 ">
          <div className="relative h-[230px] w-full">
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
          className="text-secondary mx-auto mt-3 w-1/2 text-center text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-around">
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
