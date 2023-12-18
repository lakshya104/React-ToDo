
const Input = ({ onChange, toDo}) => {
  return (
      <input 
        type="text"
        placeholder="Enter your tasks!"
        onChange={onChange}
        value={toDo}
        className="bg-white rounded-xl p-2 m-2 text-black text-center outline-none"
      />
  );
};

export default Input;
