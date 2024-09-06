import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/card";

function ShowingMovie() {
  const [listShowingMovie, setlistShowingMovie] = useState([]);
  const checkShowingMovie = (i) => i.dangChieu === true && i.sapChieu === false;
  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
        },
      });

      setlistShowingMovie(
        data.data.content.filter((i) => checkShowingMovie(i)),
      );
    })();
  }, []);
  console.log(listShowingMovie);
  return (
    <div>
      {listShowingMovie.map((movie) => {
        return (
          <Card
            key={movie.maPhim}
            name={movie.tenPhim}
            image={movie.hinhAnh}
            rating={movie.danhGia}
            description={movie.moTa}
          />
        );
      })}
    </div>
  );
}

export default ShowingMovie;
