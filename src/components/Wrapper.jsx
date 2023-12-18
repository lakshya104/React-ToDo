const Wrapper = ({ children }) => {
  return (
    <div className="rounded-xl min-h-[500px] mt-12 bg-slate-400 w-[50%] flex-col flex justify-start items-center">
      {children}
    </div>
  );
};

export default Wrapper;
