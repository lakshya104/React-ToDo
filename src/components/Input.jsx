import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ onChange, toDo }, ref) => {
  return (
    <div className="bg-slate-400 flex justify-center items-center w-[100%]">
      <input
        ref={ref}
        type="text"
        value={toDo}
        onChange={onChange}
        className="bg-white rounded-xl p-2 m-2 text-black outline-none"
      />
    </div>
  );
});

export default Input;
