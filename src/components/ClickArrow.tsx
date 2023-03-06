import { BsArrowDown } from "react-icons/bs";

type Props = {
  open: boolean;
};

const ClickArrow = ({ open }: Props) => {
  return (
    <div>
      {" "}
      <h1
        className={`absolute inset-1/2 -mt-24 -ml-10 text-4xl font-bold ${
          open ? "invisible text-white" : "text-black"
        }`}
      >
        Click!
      </h1>
      <BsArrowDown
        className={`absolute inset-1/2 mx-auto -ml-10 -mt-5 h-24 w-24 ${
          open ? "invisible text-white" : "text-black"
        }`}
      />
    </div>
  );
};

export default ClickArrow;
