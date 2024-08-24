import { Link, Outlet } from "react-router-dom";
import { Navigate } from "../../components/navigate/navigate";

export function UserTemplate() {
  return (
    <div>
      <div className="flex justify-between items-center px-[6rem] relative">
        <Link to={""}>
          <div className="w-[8rem]">
            <img src="https://i.imgur.com/lC22izJ.png" alt="" />
          </div>
        </Link>

        <Navigate></Navigate>
        <div className="flex justify-between w-[15rem] text-[2rem]">
          <Link to={"register"}>Register</Link>
          <Link to={"login"}>Login</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
