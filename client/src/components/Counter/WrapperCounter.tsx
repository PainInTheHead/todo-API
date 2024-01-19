import { Total } from "./Counter.styles";

interface CounterProps {
  active: number;
  complete: number;
}

const Counter: React.FC<CounterProps> = ({ active, complete }) => {
  return (
    <Total>
      <span>{active} item left</span>
      <span>Complete Todos: {complete}</span>
    </Total>
  );
};

export default Counter;
