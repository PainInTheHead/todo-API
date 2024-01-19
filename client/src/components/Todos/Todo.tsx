import React from "react";
import { useAppDispatch } from "../../hook";
import {
  editTitleTodo,
  editorTodo,
  deletedTodo,
  setDoneTodo,
  setEditTodo
} from "../../store/todoSlice";
import { TodoWrapper } from "./Todo.styles";

interface TodoProps {
  _id: any;
  title: string;
  done: boolean;
  isEdit: boolean;
}

const Todo: React.FC<TodoProps> = ({ _id, title, done, isEdit }) => {
  const dispatch = useAppDispatch();

  const goToggle = () => {
    dispatch(setDoneTodo(_id))
  };

  const goDelete: React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.stopPropagation();
    dispatch(deletedTodo(_id))
  };

  const handleEdit = () => {
    dispatch(editorTodo(_id));
    if (done) {
      dispatch(editorTodo(_id));
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(editTitleTodo({ id: _id, title: e.target.value }));
  };

  const handleWrapperDoubleClick: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    const targetElem = e.target as Element;
    if (targetElem.classList.contains("accept")) {
      e.stopPropagation();
    }
  };

  const editTextTodo: React.FocusEventHandler<HTMLInputElement> = (e) => {
    dispatch(editorTodo(_id));
    dispatch(setEditTodo({id:_id, title: e.target.value}))
  };

  return (
    <TodoWrapper
      onDoubleClick={handleEdit}
      done={done}
      isEdit={isEdit}
      key={_id}
    >
      <div onDoubleClick={handleWrapperDoubleClick} className="todo-wrapper">
        <button>
          <img
            src={done ? "./accetp.png" : "./noaccept.png"}
            alt="accept"
            onClick={goToggle}
          ></img>
        </button>
        {isEdit ? (
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            onBlur={editTextTodo}
            spellCheck="false"
          />
        ) : (
          <span>{title}</span>
        )}
      </div>
      <button>
        <img src="./deletebut.png" alt="delete" onClick={goDelete}></img>
      </button>
    </TodoWrapper>
  );
};

export default Todo;
