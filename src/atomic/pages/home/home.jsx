import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/carousel/index";
import { useTitle } from "../../components/hooks/title.hook";
function Home() {
  const [listMovie, setListMovie] = useState([]);

  useTitle("Movie");
  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
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
