import { navLists } from "../constants/index";
import { appleImg } from "../utils/index";
const Navbar = () => {
  return (
    <header className="px-5 py-6  ">
      <nav className="flex justify-between w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex justify-center gap-10 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <img
            src="/assets/images/search.svg"
            alt="Search Icon"
            width={14}
            height={18}
          />
          <img
            src="/assets/images/bag.svg"
            alt="Bag Icon"
            O
            width={14}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
