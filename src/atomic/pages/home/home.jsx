import axios from "axios";
import React, { useEffect, useState } from "react";
function Home() {
  const [listMovie, setListMovie] = useState([]);
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

  console.log(listMovie);
  return (
    <div>
      Home
      {/* <Carousel image={listMovie} /> */}
    </div>
  );
}

export default Home;
