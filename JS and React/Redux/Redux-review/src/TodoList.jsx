import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./Redux/todoSlice";
function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  // const [showEdit, setEdit] = useState(false);
  // const [edititem, setEditItme] = useState(null);

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todos);

  const handleAddtoTodo = () => {
    if (newTodo) {
      dispatch(
        addTodo({
          id: Date.now(),
          title: newTodo,
          completed: false,
        })
      );
      setNewTodo("");
    }
  };

  // //edit
  // const handleEdit = (todo) => {
  //   setEdit(true);
  //   setEditItme(todo);
  // };

  return (
    <div className="todoList">
      <div className="todoinput">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddtoTodo}> add</button>
        {/* {showEdit && <EditModelView todo={edititem} setEdit={setEdit} />} */}
      </div>
      <div className="todos">
        {todoList &&
          todoList?.map((todo, index) => (
            <div key={index}>
              <h2>
                {todo?.title}
                <span>
                  {/* <button onClick={() => handleEdit(todo)}>Edit</button> */}
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    X
                  </button>
                </span>
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;

// const EditModelView = ({ todo, setEdit }) => {

//   return(<>
//   <div>
//     <p>
//       {todo?.title}
//     </p>
//   </div>
//   </>)
// };
