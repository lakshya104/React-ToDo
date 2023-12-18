import { useState } from "react";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import List from "./components/List";
import ShowAll from "./components/ShowAll";
import EditScreen from "./components/EditScreen";

export default function App() {
  const [toDo, setToDo] = useState("Task One");
  const [toDoArray, setToDoArray] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [editInput, setEditInput] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editItemId, setEditItemId] = useState(null);

  const removeItem = (removeId) => {
    const newArray = toDoArray.filter((item) => item.id !== removeId);
    setToDoArray(newArray);
  };

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const edit = (id) => {
    setEditInput(true);
    setEditItemId(id);
  };

  const saveEdit = () => {
    setToDoArray((prev) =>
      prev.map((todo) =>
        todo.id === editItemId ? { ...todo, title: editValue } : todo
      )
    );
    setEditValue("");
    setEditInput(false);
  };

  const onChangeEdit = (e) => {
    setEditValue(e.target.value);
  };

  const onClick = () => {
    if (toDo != "") {
      setToDoArray((prev) => [
        ...prev,
        {
          id: toDoArray.length,
          title: toDo,
        },
      ]);
    }
    setToDo("");
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Wrapper>
        <h1 className="text-3xl font-bold m-2.5">ToDo App</h1>
        <div className="bg-slate-400 flex justify-center items-center w-[100%] ">
          <Input onChange={onChange} toDo={toDo} />
          <Button onClick={onClick} title={"Add"} />
        </div>
        {console.log(toDoArray)}
        {toDoArray.map((item) => {
          return (
            <List
              key={item.id}
              item={item}
              edit={edit}
              removeItem={removeItem}
            />
          );
        })}

        <div className="text-center mt-7">
          <Button
            title={"Tasks"}
            onClick={() => {
              return setShowAll((prev) => !prev);
            }}
          />
          {showAll &&
            toDoArray.map((item) => {
              return <ShowAll key={item.id} item={item} />;
            })}
        </div>
      </Wrapper>
      
      {editInput && (
        <EditScreen saveEdit={saveEdit} onChangeEdit={onChangeEdit} />
      )}
    </div>
  );
}
