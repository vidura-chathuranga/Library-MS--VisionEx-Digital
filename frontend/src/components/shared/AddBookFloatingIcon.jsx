import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const calculateWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};
const AddBookFloatingIcon = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    calculateWindowSize()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(calculateWindowSize());
    };

    addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link to={'/books/add'}>
      <div className="group bg-[#7aaaff] rounded-full hover:transition-all  md:p-3 cursor-pointer shadow-light-shadow">
        <PlusIcon
          size={windowDimensions.width <= 640 ? 40 : 50}
          className="group hover:rotate-180 duration-500"
        />
      </div>
    </Link>
  );
};

export default AddBookFloatingIcon;
