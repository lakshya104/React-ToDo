import { useState } from "react";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import List from "./components/List";
import Button from "./components/Button";

export default function App() {
  const [toDo, setToDo] = useState("First Task");
  const [toDoArray, setToDoArray] = useState([toDo]);
  const [showAll, setShowAll] = useState(false);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onClick = () => {
    if (toDo != "") {
      setToDoArray((prev) => [...prev, toDo]);
    }
    setToDo("");
  };

  return (
    <div className="flex justify-center items-center">
      <Wrapper>
        <h1 className="text-3xl font-bold m-2.5">ToDo App</h1>
        <Input onChange={onChange} toDo={toDo} onClick={onClick} />
        <Button onClick={onClick} title={"Add"} />
        {toDoArray.map((item, i) => {
          return (
            <div key={i} className="flex justify-center items-center">
              <List data={item} />
            </div>
          );
        })}
        <Button
          title={"Show All Tasks"}
          onClick={() => {
            console.log(toDoArray);
            return setShowAll((prev) => !prev);
          }}
        />
        <div className="text-start">
          {showAll &&
            toDoArray.map((item, i) => {
              return (
                <li className="text-black" key={i}>
                  {item}
                </li>
              );
            })}

        </div>
      </Wrapper>
    </div>
  );
}
