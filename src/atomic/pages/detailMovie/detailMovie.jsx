import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../../service/axios/index";

// Extract the YouTube video ID from the trailer URL
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function DetailMovie() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosWithAuth({
          method: "get",
          url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${params.id}`,
        });
        setMovie(data.content); // Assuming `data.content` contains movie details
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    })();
  }, [params.id]);
  // console.log(movie);
  // Static showtimes data (since the API doesn't seem to return it)
  const showtimes = {
    "GLX - Nguyễn Du": ["18:00", "20:15", "22:30"],
    "GLX - Tân Bình": ["18:00", "20:15", "22:30"],
    "GLX - Kinh Dương Vương": ["18:00", "19:30", "21:45"],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (!movie) return <>Loading...</>;

  return (
    <div className="p-6 max-w-[90rem] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Movie Poster and Details */}
        <div className="flex flex-row">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="w-full h-auto transition-transform transform hover:scale-105 duration-300"
            />
          </div>
          <div className="flex flex-col pl-10">
            <div className="mt-4 space-y-3">
              <h1 className="text-3xl font-bold text-gray-600">
                {movie.tenPhim}
              </h1>
              <p className="text-red-500 font-medium">
                Đánh giá: {movie.danhGia}/10
              </p>
              <p className="text-gray-600">
                Ngày phát hành:{" "}
                {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{movie.moTa}</p>
            </div>
            <div className="mt-6 flex space-x-4 ">
              {movie.trailer && (
                <a
                  href={`https://www.youtube.com/watch?v=${getId(movie.trailer)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition duration-200"
                >
                  Xem Trailer
                </a>
              )}
              <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-200">
                Mua Vé Ngay
              </button>
            </div>
          </div>
        </div>

        {/* Showtimes and Calendar */}
        <div className="md:col-span-2">
          {/* Calendar */}
          <div className="flex justify-between mb-6">
            {[...Array(7)].map((_, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-center border rounded-lg transition-all duration-200 ${
                  selectedDate === index
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleDateChange(index)}
              >
                Thứ {index + 2} <br />
                {20 + index} tháng 9
              </button>
            ))}
          </div>

          {/* Showtimes */}
          <div className="space-y-6">
            {Object.keys(showtimes).map((theater) => (
              <div key={theater} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800">{theater}</h2>
                <div className="mt-2 flex space-x-4">
                  {showtimes[theater].map((time) => (
                    <Link to={`/booking/${params.id}`}>
                      <span
                        key={time}
                        className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 transition duration-200"
                      >
                        {time}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
