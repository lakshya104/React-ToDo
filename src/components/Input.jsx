import { forwardRef } from 'react';
import Button from "./Button";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ onChange, toDO, onClick}, ref) => {


  return (
    <div className="bg-slate-400 flex justify-center items-center w-[100%]">
      <input
      ref={ref}
        type="text"
        onChange={onChange}
        value={toDO}
        className="bg-white rounded-xl p-2 m-2 text-black outline-none"
      />
      <Button onClick={onClick} />
    </div>
  );
});

export default Input;
