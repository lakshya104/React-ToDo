const Button = ({ title ,onClick }) => {
  return (
    <button
      className=" border-black bg-black text-white rounded-xl px-5 py-2 m-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
