import TodoItem from "./TodoItem";

//type Props = {
//  todolist: Todolist[];
// deleteItem: (id: number) => void;
//};

function Todo(props) {
  return (
    <div>
      <h1>Todo list</h1>
      <hr />
      {props.todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default Todo;
