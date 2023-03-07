import data from "./data/cvData.json";

const Projects = () => {
  return (
    <div className=" bg-[#2e026d] text-white" id="about">
      <div className="mx-24 flex flex-col">
        <h1 className="mx-auto text-4xl font-bold text-white">Projects</h1>

        <p>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="flex">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.index}
              title={project.title}
              desc={project.description}
              link={project.link}
              // icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ index, title, icon, link, desc }: any) => (
  <div className="bg-tertiary flex flex-col items-center justify-evenly rounded-[20px] border-2 py-5 px-12">
    <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
    <h3 className="text-center text-[20px] font-bold text-white">{desc}</h3>
    <h3 className="text-center text-[20px] font-bold text-white">
      Check it out{" "}
      <a href={link} target="_blank">
        Here
      </a>
    </h3>
  </div>
);

export default Projects;
