const Button = ({ onClick }) => {
  return (
    <button
      className=" border-black bg-black text-white rounded-xl px-5 py-2 m-2"
      onClick={onClick}
    >
      Add
    </button>
  );
};

export default Button;
