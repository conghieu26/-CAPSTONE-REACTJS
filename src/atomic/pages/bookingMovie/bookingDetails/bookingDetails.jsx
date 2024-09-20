export function BookingDetails({ movie, selectedSeats }) {
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
