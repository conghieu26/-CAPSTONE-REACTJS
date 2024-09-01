import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
export function UserTemplate() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center px-[15rem] py-[0.75rem] bg-[#193440] text-white sticky;">
        <Link to={""}>
          <div className="w-[8rem] flex flex-col items-center">
            <img
              className="w-[50%]"
              src="https://i.imgur.com/lC22izJ.png"
              alt=""
            />
            <p className="text-[1.5rem]">CYBERSOFT</p>
          </div>
        </Link>

        <div className=" flex justify-between w-[30rem] text-[1.8rem]">
          <Link to={"home"}>Home</Link>
          <Link to={"showing-movie"}>Showing Movies</Link>
          <Link to={"coming-movie"}>News</Link>
          {/* <Link>Ứng dụng</Link> */}
        </div>
        <div className="flex justify-between w-[15rem] text-[1.8rem]">
          <Link to={"register"}>Register</Link>
          <Link to={"login"}>Login</Link>
        </div>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Outlet className="absolute" />
      </Suspense>
    </div>
  );
}
