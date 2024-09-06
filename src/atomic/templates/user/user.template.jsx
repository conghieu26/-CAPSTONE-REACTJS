import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import ShowingMovie from "../../components/showing-movie/showing-movie";
import Home from "../../pages/home/index";

export function UserTemplate() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center px-[15rem] py-[0.75rem] bg-[#193440] text-white sticky; absolute w-[100%] z-[10000] bg-opacity-40">
          <Link to={"home"}>
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

        <div>
          <Home></Home>
        </div>
        <div className="w-[80%] m-auto">
          <Button Text={"Showing Movie"}></Button>
          <Button Text={"Showing Movie"}></Button>
        </div>
        <ShowingMovie />


        {/* <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense> */}
      </div>
    </div>
  );
}
