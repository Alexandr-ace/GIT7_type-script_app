import React from "react";
import { ITodo } from "../types/dara";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = ({
    items,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <div>
            {items.map((el) => (
                <TodoItem
                    key={el.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...el}
                />
            ))}
        </div>
    );
};

export default TodoList;
