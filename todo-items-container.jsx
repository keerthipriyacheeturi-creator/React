import TodoItem from ".TodoItem.jsx"
import styles from "./AppName.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div>
      <TodoItem todoDate="4/10/2023" todoName="buy milk"></TodoItem>
      <TodoItem todoDate="4/10/2023" todoName="go to college"></TodoItem>

      <div clasName={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}

      </div>
    </div>
  );
};
export default TodoItems;
