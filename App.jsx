import kgButton from "./kgButton";
import Hello from "./hello";
import Random from "./Random";
import AppName from "./components/AppName";
import AppTodo from "./appTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./components/App.css";

function App() {
  return (
    <div>
      {/* <h1>
    This is the best react course
    </h1>
    <br />
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random> */}

      <center className="todo-content">
        <AppName/>
        <AppTodo/> 
        <div className="items-container">
         <Todoitem1></Todoitem1>
         <Todoitem2></Todoitem2>
        </div>
        <h1>TODO App</h1>
        <div class="Container text-center">
      
          <div class="row">
            <div class="col-6">
                <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
                <input type="date" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-sucess">Add</button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
export default App;
