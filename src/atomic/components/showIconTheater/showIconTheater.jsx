import React, { Fragment, useEffect, useState } from "react";

import { axiosWithAuth } from "../../../service/axios/index";
import ShowInformationTheater from "../showInformationTheater/index";

function ShowIconTheater({ onclick }) {
  const [listTheaterShowtimes, setListTheaterShowtimes] = useState([]);
  const [TheaterName, setTheaterName] = useState(["BHDStar"]);
  useEffect(() => {
    (async () => {
      const dataWithInformationTheater = await axiosWithAuth({
        method: "get",
        url: "/QuanLyRap/LayThongTinHeThongRap",
      });
      // debugger;
      setListTheaterShowtimes(dataWithInformationTheater.data.content);
    })();
  }, []);
  console.log(listTheaterShowtimes);

  const onShowInformationSchedule = (value) => {};
  return (
    <div className="flex flex-row">
      <div className="w-[10rem] flex flex-col border-[1px] border-solid border-white items-center mt-8 pt-12 ">
        {listTheaterShowtimes.map((theaterShowtimes) => {
          return (
            <Fragment key={theaterShowtimes.maHeThongRap}>
              <button
                onClick={() => {
                  setTheaterName(theaterShowtimes.maHeThongRap);
                }}
              >
                <img className="w-[5rem] " src={theaterShowtimes.logo} alt="" />
              </button>
            </Fragment>
          );
        })}
      </div>
      <div>
        <ShowInformationTheater name={TheaterName} />
      </div>
    </div>
  );
}

export default ShowIconTheater;
