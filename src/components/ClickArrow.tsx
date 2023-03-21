import { BsArrowDown } from "react-icons/bs";

type Props = {
  open: boolean;
};

const ClickArrow = ({ open }: Props) => {
  return (
    <div>
      <h1
        className={`absolute inset-y-48 inset-x-32 ml-5 text-center text-4xl md:inset-1/2 md:-ml-10 md:-mt-24 md:font-bold ${
          open ? "invisible text-white" : "text-white"
        }`}
      >
        Click!
      </h1>
      <BsArrowDown
        className={`absolute inset-y-64 inset-x-32 mx-auto mt-5 animate-bounce text-4xl md:inset-1/2 md:mx-auto md:-mt-5 md:-ml-10 md:h-24 md:w-24 ${
          open ? "invisible text-white" : "text-white"
        }`}
      />
    </div>
  );
};

export default ClickArrow;
