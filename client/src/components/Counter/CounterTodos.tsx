import Counter from "./WrapperCounter";
import { selectTodos } from "../../utilites/selectors";
import { useAppSelector } from "../../hook";

const CounterTodos: React.FC = () => {
  const todos = useAppSelector(selectTodos);
  const activedTodos = todos.filter((todo) => !todo.done).length;
  const completedTodos = todos.length - activedTodos;

  return <Counter active={activedTodos} complete={completedTodos} />;
};

export default CounterTodos;
