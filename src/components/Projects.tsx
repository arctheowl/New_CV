import Tilt from "react-tilt";
import { motion } from "framer-motion";
import data from "./data/cvData.json";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, tags }: any) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="md:w-[24rem]"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card' h-full w-full rounded-[20px] p-[1px] md:min-h-[280px]"
      >
        <div className="flex h-full min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#030714] py-2 ">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt="project_image"
              className="h-full w-full rounded-2xl object-cover px-2"
            />
          </div>

          <div className="mt-2 px-12">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag: any) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <div className="-mt-24 py-10 md:-mt-0">
      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
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
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-col gap-10 pt-10 md:mt-20 md:flex-row md:flex-wrap md:justify-around md:pt-0">
        {data.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "Projects");
