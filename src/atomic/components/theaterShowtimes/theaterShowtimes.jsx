<<<<<<< HEAD
import React, { useState } from "react";
import ShowIconTheater from "../showIconTheater/index";
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../service/axios/index";
>>>>>>> main

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
