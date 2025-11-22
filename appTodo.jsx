function AddTodo(){
return (
<center class="todo-content">
        <h1>TODO App</h1>
        <div class="Container text-center">
      
          <div class="row kg-row">
            <div class="col-6">
                <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div class="col-4">
                <input type="date" />
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-sucess kg-button">Add</button>
            </div>
          </div>
        </div>
      </center>
);
}
export default AppTodo;