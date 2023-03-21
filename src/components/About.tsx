import { motion } from "framer-motion";
import { SectionWrapper } from "~/hoc";
import { fadeIn, textVariant } from "~/utils/motion";
import Tilt from "react-tilt";
import { styles } from "../styles";

const About = () => {
  const fontUrl = "/fonts/Roboto Medium_Regular.json";
  const textOptions = {
    size: 1,
    height: 0.5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  return (
    <div className="-mt-24 px-2 pb-20 text-white md:-mt-0" id="about">
      <div className="flex flex-col text-center">
        <motion.div variants={textVariant(0.1)}>
          <h1 className={styles.sectionHeadText}>About Me</h1>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mx-auto mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          I'm a skilled full stack software developer with experience in
          TypeScript, Go, and Python. On the frontend I have sepecific expertise
          in frameworks like Nextjs and Astro. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and
          user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life! In my personal life I play
          chess, active member in a monthly bookclub and keep up to date with
          interesting technical projects.
        </motion.p>
        <div className="mx-auto flex flex-wrap gap-4 pt-10 md:mt-20 md:gap-10 md:pt-0">
          {ServiceCardList.map((service, index) => (
            <ServiceCard
              key={service.index}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCardList = [
  {
    index: 1,
    title: "Chess",
    icon: "/images/assets/Chess.png",
  },
  {
    index: 2,
    title: "Reading",
    icon: "/images/assets/book.png",
  },
  {
    index: 3,
    title: "Tech Projects",
    icon: "/images/assets/Tech.png",
  },
];

export const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-[10rem] rounded-2xl md:w-[20rem] md:p-5 "
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
            <h3 className="text-[24px] font-bold text-white">{title}</h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, "About");
