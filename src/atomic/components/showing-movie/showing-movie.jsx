import { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../service/axios.config";
import Card from "../card/card";

function ShowingMovie() {
  const [listShowingMovie, setlistShowingMovie] = useState([]);
  const checkShowingMovie = (i) => i.dangChieu === true && i.sapChieu === false;
  useEffect(() => {
    (async () => {
      const data = await axiosWithAuth({
        method: "get",
        url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });

      setlistShowingMovie(
        data.data.content.filter((i) => checkShowingMovie(i)),
      );
      console.log(data.data.content);
    })();
  }, []);
  console.log(listShowingMovie);

  return (
    <div className="grid grid-cols-5 mx-auto w-[80%] mb-4 gap-6">
      {listShowingMovie.map((movie) => (
        <Card
          name={movie.tenPhim}
          image={movie.hinhAnh}
          rating={movie.danhGia}
          description={movie.moTa}
        />
      ))}
    </div>
  );
}

export default ShowingMovie;
