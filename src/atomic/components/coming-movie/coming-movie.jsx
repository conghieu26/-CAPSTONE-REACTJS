import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../service/index";
import Card from "../card/card";

function ComingMovie({ action }) {
  const [listComingMovie, setlistComingMovie] = useState([]);
  const checkComingMovie = (i) => i.dangChieu === false && i.sapChieu === true;
  useEffect(() => {
    (async () => {
      const data = await axiosWithAuth({
        method: "get",
        url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });

      setlistComingMovie(data.data.content.filter((i) => checkComingMovie(i)));
      console.log(data.data.content);
    })();
  }, []);
  console.log(listComingMovie);
  return (
    <div className=" show grid grid-cols-4 w-[80%] m-auto mb-4 gap-6">
      {listComingMovie.map((movie) => (
        <Card
          name={movie.tenPhim}
          image={movie.hinhAnh}
          rating={movie.danhGia}
          description={movie.moTa}
        />
        // </Link>
      ))}
    </div>
  );
}

export default ComingMovie;
