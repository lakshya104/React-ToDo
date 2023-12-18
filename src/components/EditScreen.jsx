

const EditScreen = ({saveEdit, onChangeEdit}) => {
  return (
    <div className="absolute flex rounded-xl m-4 bg-slate-700 items-center justify-center h-[100%] w-[100vw]">
           <div className="flex rounded-xl m-4 bg-black items-center justify-center h-[50%] w-[40%]">
           <input
              className="bg-white rounded-xl p-2 m-2 text-black text-center outline-none"
              onChange={onChangeEdit}
            />
            <button
              className="m-2 py-2 px-4 rounded-lg bg-black outline"
              onClick={saveEdit}
            >
              Save
            </button>
           </div>
          </div>
  )
}

export default EditScreen