import { useState } from "react";

const List = ({ data }) => {
  const [completed, setCompleted] = useState(false);

  if(completed || !data){
    return null;
  }

  return (
    <>
      <p className={completed ? "hidden" : "text-slate-800 m-1"}>{data}</p>
      <button
        onClick={() => {
          setCompleted(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x hover:cursor-pointer hover:scale-125 transition"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </>
  );
};

export default List;
