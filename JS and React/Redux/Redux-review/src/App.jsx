
import TodoList from "./TodoList";

import { Provider } from "react-redux";
import store from "./Redux/store";



function App() {
  return (
    <Provider store={store}>

      <TodoList />
      
    </Provider>
  )
}

export default App
