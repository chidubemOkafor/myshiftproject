import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { handleOpen1 } from "./Navbar";

const Search = ({ setOpen1 }) => {
  const handleOpen1 = () => {
    setOpen1(false);
  };
  return (
    <div>
      <div className="h-screen fixed backdrop-brightness-50 w-full ">
        <div className="w-full  absolute h-20 bg-white">
          <div className=" flex justify-center">
            <div className="w-[45em] my-5 border- rounded-md h-[2.8em] border-2">
              <input
                className=" placeholder:w-20 pt-2 pl-4 w-[40em] rounded-full outline-none"
                type="text"
                placeholder="Search.."
              />
              <button>
                <IoIosSearch className="hover:text-slate-500 mt-2 ml-10 scale-100" />
              </button>
            </div>
            <button onClick={handleOpen1}>
              <MdClose className="hover:text-slate-500 ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
