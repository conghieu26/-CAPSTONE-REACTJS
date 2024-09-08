function Button({ onclick, text }) {
  text;
  return (
    <button
      onClick={onclick}
      className="relative inline-flex items-center justify-center p-1 mt-6 mb-6 me-3 overflow-hidden text-xl font-bold text-white rounded-2xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-black rounded-xl group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
}

export default Button;
