import { Link } from "react-router-dom";

export function Navigate() {
  return (
    <div className=" flex justify-between w-[30rem] text-[2rem]">
      <Link to={"home"}>Home</Link>
      <Link to={"contact"}>Contact</Link>
      <Link to={"news"}>News</Link>
      {/* <Link>Ứng dụng</Link> */}
    </div>
  );
}
