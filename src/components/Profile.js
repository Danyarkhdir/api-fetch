import { BsPersonLinesFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
export default function Profile({ user }) {
  return (
    <div className="w-full bg-slate-400 h-screen">
      <div className="pt-12 flex flex-col items-center h-full">
        <img
          height={"200px"}
          width={"200px"}
          src={user.profile}
          className=" rounded-full overflow-hidden"
          alt="User Image"
        />
        <div className="mt-10">
          <h2 className="p-1 font-serif text-4xl font-bold flex items-center">
            <BsPersonLinesFill size={"35px"} className="mr-3" />
            {user.name}
          </h2>
          <p className="p-1 flex items-center text-2xl  font-serif">
            <MdAlternateEmail size={"30px"} className="mr-5" />
            {user.email}
          </p>
          <p className="p-1 flex items-center text-2xl  font-serif">
            <HiLocationMarker size={"30px"} className="mr-5" /> {user.country}
          </p>
        </div>
      </div>
    </div>
  );
}
