import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../service/axios.config";
import { Carousel } from "../../components/carousel/index";
import { useTitle } from "../../components/hooks/title.hook";
function Home() {
  const [listMovie, setListMovie] = useState([]);

  useTitle("Movie");
  useEffect(() => {
    (async () => {
      const data = await axiosWithAuth({
        method: "get",
        url: "/QuanLyPhim/LayDanhSachBanner",
      });
      // debugger;
      setListMovie(data.data.content);
    })();
  }, []);

  return (
    <div>
      <Carousel image={listMovie} />
    </div>
  );
}

export default Home;
