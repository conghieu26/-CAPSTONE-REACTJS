import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../service/index";
import Card from "../card/card";

function ComingMovie() {
  const [listComingMovie, setlistComingMovie] = useState([]);
  const checkComingMovie = (i) => i.dangChieu === false && i.sapChieu === true;
  useEffect(() => {
    (async () => {
      const data = await axiosWithAuth({
        method: "get",
        url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });

      setlistComingMovie(data.data.content.filter((i) => checkComingMovie(i)));
      // console.log(data.data.content);
    })();
  }, []);
  // console.log(listComingMovie);
  return (
    <div className="grid grid-cols-5 mx-auto w-[80%] mb-4 gap-6 ">
      {listComingMovie.map((movie) => (
        <div key={movie.maPhim}>
          <Link to={`/movie/${movie.maPhim}`}>
            <Card
              name={movie.tenPhim}
              image={movie.hinhAnh}
              rating={movie.danhGia}
              description={movie.moTa}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ComingMovie;
