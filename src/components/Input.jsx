
const Input = ({ onChange, toDo }) => {
  return (
    <div className="bg-slate-400 flex justify-center items-center w-[100%]">
      <input
        type="text"
        value={toDo}
        onChange={onChange}
        className="bg-white rounded-xl p-2 m-2 text-black outline-none"
      />
    </div>
  );
};

export default Input;
