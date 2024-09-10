import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../service/axios/index";

function TheaterShowtimes() {
  const [listTheaterShowtimes, setListTheaterShowtimes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axiosWithAuth({
        method: "get",
        url: "/QuanLyRap/LayThongTinHeThongRap",
      });
      // debugger;
      setListTheaterShowtimes(data.data.content);
    })();
  }, []);
  console.log(listTheaterShowtimes);
  return (
    <div className="mx-auto w-[80%]">
      {listTheaterShowtimes.map((theaterShowtimes) => {
        return (
          <Link>
            <div className="w-[6rem] flex flex-col  ">
              <img className="w-[100%]" src={theaterShowtimes.logo} alt="" />
            </div>
            <div></div>
            <div></div>
          </Link>
        );
      })}
    </div>
  );
}

export default TheaterShowtimes;
