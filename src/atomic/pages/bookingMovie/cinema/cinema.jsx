import clsx from "clsx";
import React, { useState } from "react";

// Dữ liệu phim
const movies = [
  {
    name: "Avenger",
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "The Lion King",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

// Sơ đồ ghế ngồi
const seats = Array.from({ length: 8 * 8 }, (_, i) => i);
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[1]); // Mặc định chọn phim Joker
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="flex flex-row items-start justify-center min-h-screen bg-gray-900 text-white text-sm p-8">
      {/* Sơ đồ ghế bên trái */}
      <div className="flex-1">
        <Movies
          movie={selectedMovie}
          onChange={(movie) => {
            setSelectedSeats([]);
            setSelectedMovie(movie);
          }}
        />
        <ShowCase />
        <Cinema
          movie={selectedMovie}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />
      </div>

      {/* Thông tin chi tiết vé bên phải */}
      <div className="w-1/3 ml-8">
        <BookingDetails movie={selectedMovie} selectedSeats={selectedSeats} />
      </div>
    </div>
  );
}

// Component Movies
function Movies({ movie, onChange }) {
  return (
    <div className="mb-6">
      <label htmlFor="movie" className="mr-4">
        Chọn phim:
      </label>
      <select
        id="movie"
        className="bg-white text-black px-4 py-2 rounded"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

// Component ShowCase
function ShowCase() {
  return (
    <ul className="flex justify-center items-center gap-4 mb-12">
      <li className="flex items-center">
        <span className="w-4 h-4 bg-gray-500 rounded-t-md inline-block"></span>{" "}
        <small className="ml-2">Ghế trống</small>
      </li>
      <li className="flex items-center">
        <span className="w-4 h-4 bg-green-500 rounded-t-md inline-block"></span>{" "}
        <small className="ml-2">Ghế đã chọn</small>
      </li>
      <li className="flex items-center">
        <span className="w-4 h-4 bg-gray-300 rounded-t-md inline-block"></span>{" "}
        <small className="ml-2">Ghế đã đặt</small>
      </li>
    </ul>
  );
}

// Component Cinema
function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat),
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="flex flex-col items-center mb-6">
      {/* Màn hình */}
      <div className="w-full h-16 bg-white mb-8 rounded-t-md rotateX-30-scale-110 shadow-lg"></div>

      {/* Sơ đồ ghế */}
      <div className="flex">
        <div className="flex flex-col justify-center mr-2">
          {rows.map((row) => (
            <div key={row} className="text-center text-white h-6">{row}</div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-1">
          {seats.map((seat, index) => {
            const row = rows[Math.floor(index / 8)];
            const seatNumber = (index % 8) + 1;
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = movie.occupied.includes(seat);
            return (
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  "w-8 h-6 rounded-t-md text-center text-white",
                  isSelected ? "bg-green-500" : "bg-gray-500",
                  isOccupied && "bg-gray-300 cursor-not-allowed",
                  !isOccupied && "cursor-pointer hover:bg-green-200",
                )}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
              >
                {row}{seatNumber}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Component BookingDetails
function BookingDetails({ movie, selectedSeats }) {
  return (
    <div className="p-4 bg-gray-800 rounded-md shadow-lg text-white">
      <h2 className="text-lg mb-2">{movie.name}</h2>
      <div className="mb-2">
        <span>Ngày chiếu giờ chiếu:</span>
        <span className="text-orange-500"> 19/12/2021 - 13:12</span>
      </div>
      <div className="mb-2">
        <span>Cụm rạp:</span>
        <span className="text-white"> CGV - Aeon Bình Tân</span>
      </div>
      <div className="mb-2">
        <span>Ghế chọn:</span>
        <span className="text-green-500">
          {selectedSeats.map((seat) => ` ${seat}`)}
        </span>
      </div>
      <div className="mb-2">
        <span>Ưu đãi:</span>
        <span> 0%</span>
      </div>
      <div className="mb-2">
        <span>Tổng tiền:</span>
        <span className="text-green-500">
          {selectedSeats.length * movie.price}$
        </span>
      </div>
      <button className="w-full bg-orange-500 py-2 rounded-md">
        BOOKING TICKET
      </button>
    </div>
  );
}
