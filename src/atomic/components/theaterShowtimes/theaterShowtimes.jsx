import React, { useState } from "react";
import ShowIconTheater from "../showIconTheater/index";

function TheaterShowtimes() {
  const [listInformationTheater, setListInformationTheater] = useState([]);

  const getInformation = (value) => {
    setListInformationTheater(value);
  };
  return (
    <div className="mx-auto w-[80%] flex flex-row">
      <ShowIconTheater />
    </div>
  );
}

export default TheaterShowtimes;
