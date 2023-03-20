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
    <div className="px-2 pb-20 text-white" id="about">
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
          together to bring your ideas to life! In my personal life I play chess, active member 
          in a monthly bookclub and keep up to date with interesting technical projects.
        </motion.p>
        {/* <div className="mx-auto mt-20 flex flex-wrap gap-10">
          {ServiceCardList.map((service, index) => (
            <ServiceCard
              key={service.index}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

const ServiceCardList = [
  {
    index: 1,
    title: "Web Development",
    icon: "/images/web-development.svg",
  },
  {
    index: 2,
    title: "Mobile Development",
    icon: "/images/mobile-development.svg",
  },
  {
    index: 3,
    title: "UI/UX Design",
    icon: "/images/ui-ux-design.svg",
  },
  {
    index: 4,

    title: "Digital Marketing",

    icon: "/images/digital-marketing.svg",
  },
];

export const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className="">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient shadow-card' w-full rounded-[20px] p-[1px]"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#030714] py-5 px-12">
        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, "About");
