import data from "./data/cvData.json";

const Education = () => {
  return (
    <div className=" bg-[#030714] text-white" id="about">
      <div className="mx-24 flex flex-col">
        <h1 className="text-4xl font-bold text-white">Education</h1>

        <p>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="flex">
          {data.education.map((edu) => (
            <EducationCard
              key={edu.degree.title}
              title={edu.degree.title}
              desc={edu.degree.description}
              time={edu.degree.time}
              modules={edu.degree.modules}
              location={edu.degree.university}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface EducationCardProps {
  title: string;
  desc: string;
  time: string;
  modules: { name: string; description: string }[];
  location: string;
}

const EducationCard = ({
  title,
  desc,
  time,
  location,
  modules,
}: EducationCardProps) => (
  <>
    <div className="bg-tertiary flex flex-col items-center justify-evenly rounded-[20px] border-2 py-5 px-12">
      <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
      <h3 className="text-center text-[20px] font-bold text-white">{desc}</h3>
      <ModulesSection modules={modules} />
      <h3 className="text-center text-[20px] font-bold text-white">{time}</h3>
      <h3 className="text-center text-[20px] font-bold text-white">
        {location}
      </h3>
    </div>
  </>
);

const ModulesSection = ({
  modules,
}: {
  modules: { name: string; description: string }[];
}) => (
  <div className="flex flex-col">
    {modules.map((module) => (
      <div className="flex flex-col" key={module.name}>
        <h3 className="text-center text-[20px] font-bold text-white">
          {module.name}
        </h3>
        <h3 className="text-center text-[20px] font-bold text-white">
          {module.description}
        </h3>
      </div>
    ))}
  </div>
);

export default Education;
