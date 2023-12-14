import { useRef, useState } from "react";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import List from "./components/List";

export default function App() {
  const [toDo, setToDo] = useState('My Tasks');
  const [toDoArray, setToDoArray] = useState([toDo]);
  const inputRef = useRef(null);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onClick = ()=>{
    setToDoArray(prev =>[...prev, toDo]);
    inputRef.current.value = ' '; 
  } 


  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <Wrapper>
      <h1 className="text-3xl font-bold m-4">
        ToDo App
      </h1>
        <Input onChange={onChange} toDo={toDo} onClick={onClick} ref={inputRef}/>
       {toDoArray.map((item, i)=>{
         return <List key={i} data={item} />
       })}
      </Wrapper>
    </div>
  );
}
