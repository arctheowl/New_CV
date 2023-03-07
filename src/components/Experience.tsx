import data from "./data/cvData.json";

const Experience = () => {
  return (
    <div className=" bg-[#2e026d] text-white">
      <div className="mx-24 flex flex-col">
        <h1 className="text-4xl font-bold text-white">Experience</h1>

        <p>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="flex">
          {data.experience.map((exp) => (
            <ExperienceCard
              key={exp.time}
              title={exp.title}
              desc={exp.description}
              time={exp.time}
              achievements={exp.achievements}
              location={exp.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  title,
  link,
  desc,
  achievements,
  time,
  location,
}: any) => (
  <div className="bg-tertiary flex flex-col items-center justify-evenly rounded-[20px] border-2 py-5 px-12">
    <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
    <h3 className="text-center text-[20px] font-bold text-white">{desc}</h3>
    <h3 className="text-center text-[20px] font-bold text-white">{link}</h3>

    {achievements.map((achievement: string) => {
      <h3
        key={achievement}
        className="text-center text-[20px] font-bold text-white"
      >
        {achievement}
      </h3>;
    })}

    <h3 className="text-center text-[20px] font-bold text-white">{time}</h3>
    <h3 className="text-center text-[20px] font-bold text-white">{location}</h3>
  </div>
);

export default Experience;
