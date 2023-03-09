import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import data from "./data/cvData.json";

const Tech = () => {
  return (
    <div className="mx-auto flex w-1/2 flex-row flex-wrap justify-center gap-10">
      {data.tech.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
