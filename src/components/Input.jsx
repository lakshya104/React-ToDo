
const Input = ({ onChange}) => {
  return (
    // 
      <input 
        type="text"
        placeholder="Enter your tasks!"
        onChange={onChange}
        className="bg-white rounded-xl p-2 m-2 text-black text-center outline-none"
      />
    // </div>
  );
};

export default Input;
