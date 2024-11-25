import { useState } from "react";
import Todo from "./Todolist/Todo";
import style from ".module.less";

export type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItem = () => {
    if (!inputValue.trim()) alert("등록할 일정을 입력해주세요!");
    return;
  };
  setTodoList([
    ...todoList,
    {
      id: todoList.length,
      todo: inputValue,
      isDone: false,
    },
  ]);

  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <main>
      <div className={style.container}>
        <div className={style.top}>TodoList</div>
        <div className={style.inputValue}></div>
        <input
          value={inputValue}
          type="text"
          placeholder="오늘 할 일을 추가해 보세요!"
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      {/*<button onClick={addItem}>오늘 할 일</button>
      <button onClick={addItem}>추가하기</button>*/}
      <div className={style.bottom}>
        <div className={style.item1}>오늘 할 일{tasks()}</div>
        <div className={style.item2}>추가하기</div>
      </div>
      <Todo todoList={todoList} deleteItem={deleteItem} /> {/*프록스 추가*/}
    </main>
  );
}

export default App;

//1. 인풋창이 있고 버튼
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가
//3. 아이템 삭제 버튼을 누르면 삭제가 가능하다
