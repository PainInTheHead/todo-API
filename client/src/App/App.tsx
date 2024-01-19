import { useEffect } from "react";
import Form from "../components/Form/Form";
import CounterTodos from "../components/Counter/CounterTodos";
import Todos from "./../components/Todos/Todos";
import Buttons from "../components/Buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../hook";
import { getTodos } from "../store/todoSlice";
import { selectTodos } from "../utilites/selectors";
import { Container } from "./App.styles";
import { authorization } from "../store/todoSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const todos = useAppSelector(selectTodos);


  const handleClick = async () => {
    localStorage.clear()
    const name = prompt('Введите ваше имя:');
    const pass = prompt('пароль:')
    await dispatch(authorization({email: name, password: pass}))
    .then((response) => {
      if (response.payload.token) {
        localStorage.setItem('token', response.payload.token)
      }
    })
    window.location.reload()
    await dispatch(getTodos());
  };


  return (
    <Container>
       <button onClick={handleClick}>Криво логинимся!</button>
      <h1 className="title">Todos</h1>
      <Form />
      <CounterTodos />
      {todos.length !== 0 && <Buttons />}
      <Todos />
    </Container>
  );
}

export default App;
