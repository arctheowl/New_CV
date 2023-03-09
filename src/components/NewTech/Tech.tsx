import { SectionWrapper } from "~/hoc";
import NewTech from "./NewTech";

export const Tech = () => (
  <div className="mx-auto -mt-32 flex w-1/2 flex-col overflow-visible pb-16 md:mx-auto md:w-full md:flex-row">
    <NewTech title="Frontend" />
    <NewTech title="Backend" />
  </div>
);

export default SectionWrapper(Tech, "Tech");
