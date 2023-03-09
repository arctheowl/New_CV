import { motion } from "framer-motion";
import { SectionWrapper } from "~/hoc";
import { fadeIn, textVariant } from "~/utils/motion";
import Tilt from "react-tilt";
// import styles from "~/styles/gloabls.css";
import { styles } from "../styles";

const About = () => {
  return (
    <div className="p-20 text-white" id="about">
      <div className="flex flex-col text-center">
        <motion.div variants={textVariant(0.5)}>
          <h1 className={styles.sectionHeadText}>About Me</h1>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mx-auto mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="mx-auto mt-20 flex flex-wrap gap-10">
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
