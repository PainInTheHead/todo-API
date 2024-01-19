import Todo from "./Todo";
import { getFilteredTodos } from "../../utilites/selectors";
import { useAppSelector } from "../../hook";
import { TodosWrap } from "./Todo.styles";

const Todos: React.FC = () => {
  const filteredTodos = useAppSelector(getFilteredTodos);

  return (
    <TodosWrap className="todos">
      {filteredTodos.map((todo) => {
        return <Todo key={todo._id} {...todo} />;
      })}
    </TodosWrap>
  );
};

export default Todos;
