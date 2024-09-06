import axios from "axios";
import { useEffect, useState } from "react";

function ShowingMovie() {
  const [listShowingMovie, setlistShowingMovie] = useState();
  const token =
    " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ";
  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://domain.xyz/api/QuanLyPhim/LayDanhSachPhim",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).catch((reject) => {
        console.log(reject);
      });
      console.log(data);

      // debugger;
    })();
  }, []);

  return <div>Showing Movie</div>;
}

export default ShowingMovie;
