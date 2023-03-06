const Projects = () => {
  return (
    <div className=" bg-[#2e026d] text-white" id="about">
      <div className="mx-auto flex w-1/2 flex-col">
        <h1 className="text-4xl font-bold text-white">About Me</h1>

        <p>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="flex">
          {ServiceCardList.map((service) => (
            <ServiceCard
              key={service.index}
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

const ServiceCard = ({ index, title, icon }: any) => (
  <div className="bg-tertiary flex flex-col items-center justify-evenly rounded-[20px] border-2 py-5 px-12">
    <img src={icon} alt={title} className="h-16 w-16 object-contain" />

    <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
  </div>
);

export default Projects;
