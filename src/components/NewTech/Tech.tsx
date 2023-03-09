import { SectionWrapper } from "~/hoc";
import NewTech from "./NewTech";

export const Tech = () => (
  <div className="mx-12 -mt-32 overflow-visible pb-16 md:mx-32 md:flex">
    <NewTech title="Frontend" />
    <NewTech title="Backend" />
  </div>
);

export default SectionWrapper(Tech, "Tech");
