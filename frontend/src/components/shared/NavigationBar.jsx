import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="block w-full bg-[#020817]  p-5 text-center sticky  top-0 shadow-2xl ring-1 ring-black/5">
      <Link className="text-4xl font-medium text-underlay-1 ">Library MS</Link>
    </div>
  );
};
export default NavigationBar;
