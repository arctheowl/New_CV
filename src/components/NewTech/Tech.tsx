import { SectionWrapper } from "~/hoc";
import NewTech from "./NewTech";

export const Tech = () => (
  <div className="mx-32 -mt-32 flex overflow-visible pb-16">
    <NewTech title="Frontend" />
    <NewTech title="Backend" />
  </div>
);

export default SectionWrapper(Tech, "Tech");
