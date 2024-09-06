import axios from "axios";
import React, { useEffect } from "react";

function ComingMovie() {
  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "",
      });
    })();
  }, []);
  return <div>Coming Movie</div>;
}

export default ComingMovie;
