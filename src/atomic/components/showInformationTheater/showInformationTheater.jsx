import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../service/axios/index";

function ShowInformationTheater({ name }) {
  const [listInformationScheduleMovie, setListInformationScheduleMovie] =
    useState([]);

  useEffect(() => {
    (async () => {
      const dataWithInformationScheduleMovie = await axiosWithAuth({
        method: "get",
        url: "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      });
      // debugger;
      setListInformationScheduleMovie(
        dataWithInformationScheduleMovie.data.content.filter((value) => {
          return value.maHeThongRap == name ? value.lstCumRap : null;
        }),
      );
    })();
  }, []);
  console.log(name);
  console.log(listInformationScheduleMovie);
  return (
    <div className="w-[10rem] flex flex-col border-[1px] border-solid border-white items-center mt-8 pt max-h-[50rem] overflow-auto">
      {listInformationScheduleMovie.map((theater) => {
        return theater["lstCumRap"].map((value) => {
          return (
            <div className="mt-9">
              <img
                className="rounded-[12rem] w-[6rem]"
                src={value.hinhAnh}
                alt=""
              />
            </div>
          );
        });
      })}
    </div>
  );
}

export default ShowInformationTheater;
